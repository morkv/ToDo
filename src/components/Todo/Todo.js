import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss'

import Checkbox from '../UI/Checkbox/Checkbox';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.title.focus();
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = this.refs.title.value;
        
        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    handleToggle() {
        this.props.onToggle(this.props.id);
    }

    handleEdit() {
        this.setState({ editing: true });
    }

    renderDisplay() {
        const className = `todo${this.props.completed ? ' completed' : ''}`;

        return (
            <div className={className}>
                <Checkbox checked={this.props.completed} onChange={this.handleToggle} />

                <span className='todo__title'>{this.props.title}</span>

                <div className='todo__mod'>
                    <Button className="btn btn--edit btn--icon" icon="edit" onClick={this.handleEdit} />
                    <Button className="btn btn--delete btn--icon" icon="delete" onClick={this.handleDelete} />
                </div>
            </div>
        );
    }

    renderForm() {
        return (
            <Form formClass={'todo-edit-form'} formOnSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title} />
                <Button className="btn btn--save btn--icon" icon="save" type="submit" />
            </Form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Todo;
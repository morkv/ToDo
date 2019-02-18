import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-grid-system';

import './TodoForm.scss';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import Input from '../UI/Input/Input';


class TodoFormForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.store = this.props.store

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        const title = event.target.value;

        this.setState({ title });
    }

    render() {
        return (
            <section className={['section'].join(' ')}>
                <Container>
                    <Row>
                        <Col>
                            <Form formClass={'todo-add-form'} formOnSubmit={this.handleSubmit}>
                                <Input
                                    inputClassName={'input'}
                                    inputIsRequired={true}
                                    inputType={'text'}
                                    inputVal={this.state.title}
                                    inputPlaceholder={'Enter ToDo Title'}
                                    inputOnChange={this.handleChange}
                                />
                                <Button className="btn btn--submit" type="submit">Add</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section> 
        );
    }
}

TodoFormForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default TodoFormForm;
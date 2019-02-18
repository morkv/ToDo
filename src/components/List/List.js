import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-grid-system';
import Todo from '../Todo/Todo';

function List(props) {

    return (
        <section className={['section', 'todo-list'].join(' ')}>
            <Container>

                {props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={props.onDelete}
                        onToggle={props.onToggle}
                        onEdit={props.onEdit}
                    />)
                }
            </Container>
        </section>
    );
}

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default List;
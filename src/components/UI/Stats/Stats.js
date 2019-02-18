import React from 'react';
import PropTypes from 'prop-types';

import './Stats.scss'

function Stats(props) {
    const total = props.todos.length;
    const completed = props.todos.filter(todo => todo.completed).length;
    const uncompleted = total - completed;

    return (
        <table className={['stats', props.statsClass].join(' ')}>
            <tbody>
                {/* <tr>
                    <th>All tasks:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Done:</th>
                    <td>{completed}</td>
                </tr> */}
                <tr>
                    <th>In Progress:</th>
                    <td>{uncompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default Stats;

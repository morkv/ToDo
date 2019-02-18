import React from 'react';
import {connect} from 'react-redux';

import TodoForm from '../../components/TodoForm/TodoForm';

import { addTodo } from '../../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addTodo(title)),
        
    }
}

const FormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default FormContainer;


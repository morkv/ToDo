import React from 'react';
import PropTypes from 'prop-types';
import classes from './Form.scss';


const Form = (props) => (
    <form
        className={['form', [props.formClass]].join(' ')}
        onSubmit={props.formOnSubmit}
    >
        {props.children}
    </form>

)

Form.propTypes = {
    formOnSubmit: PropTypes.func
}

export default Form;
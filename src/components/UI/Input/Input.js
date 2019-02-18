import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.scss';


const Input = (props) => (
    <input
        // className={[classes.input, classes[props.inputClass]].join(' ')}
        className={props.inputClassName}
        required={props.inputIsRequired}
        type={props.inputType} 
        placeholder={props.inputPlaceholder}
        onChange={props.inputOnChange}
        value={props.inputVal}
        defaultValue={props.inputDefaultValue}
        ref={props.inputRef}
    />
)

Input.propTypes = {
    inputIsRequired: PropTypes.bool,
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    inputName: PropTypes.string
}

export default Input;
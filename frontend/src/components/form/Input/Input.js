import React from "react"
import PropTypes from 'prop-types';

const Input = ({id, name, type, labelText, helpText,}) => {
    const helpId = `help-${id}`;  

    return <>
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{labelText}</label>
            <input 
                id={id}
                name={name} 
                type={type} 
                className="form-control" 
                aria-describedby={helpId}
                
            >
            </input>
            {
                helpText ? 
                    <div id={helpId} className="form-text">{helpText}</div>
                    : 
                    null
            }
        </div>
    </>
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

Input.defaultProps = {
}

export default Input;
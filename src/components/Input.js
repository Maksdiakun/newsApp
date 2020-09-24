import React from 'react';

const Input = ({ label, name, changeHandler, type, val }) => {
    return (
        <label key={name}>
            <span>{label}</span>
            <input type={type}
                name={name}
                value={val}
                onChange={changeHandler}
                required
            />
        </label>
    )
};

export default Input;
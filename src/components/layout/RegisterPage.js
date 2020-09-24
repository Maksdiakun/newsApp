import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../Input';
import { registerAction } from '../../store/actions/userAction';

const initState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}
const inputs = [
    {
        name: 'email',
        label: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password'
    },
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text'
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text'
    }
]
const RegisterPage = ({ history, registerUser }) => {
    const [state, setState] = useState(initState);

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }
    const submitHandler = (event) => {
        const { email, password, firstName, lastName } = state;
        event.preventDefault();
        setState(initState);
        registerUser(email, password, firstName, lastName, history);
    }
    return (
        <div className="login">
            <form className="log_form" onSubmit={submitHandler}>
                <h1 style={{ textAlign: 'center' }}>
                    Register
                </h1>
                {inputs.map(({ name, label, type }) => (
                    <Input key={name} name={name}
                        changeHandler={changeHandler}
                        type={type}
                        val={state[name]}
                        label={label}
                    />
                ))}
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between'
                }}>
                    <button className="black_btn" type="submit">Register</button>
                    <Link to="/login" className="black_btn" type="button">Login</Link>
                </div>
            </form>
        </div >
    )
};

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (email, password, firstName, lastName, history) => (
            dispatch(registerAction(email, password, firstName, lastName, history))
        )
    }
}
export default connect(null, mapDispatchToProps)(RegisterPage);

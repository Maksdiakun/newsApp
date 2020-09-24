import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../Input';
import { SignInAction } from '../../store/actions/userAction';

const initState = {
    email: '',
    password: ''
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
]
const LoginPage = ({ history, LoginUser }) => {
    const [state, setState] = useState(initState);
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        LoginUser(state.email, state.password, history);
    }
    return (
        <div className="login">
            <form className="log_form" onSubmit={submitHandler}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                {inputs.map(({ name, label, type }) => (
                    <Input key={name} name={name}
                        changeHandler={changeHandler}
                        type={type}
                        val={state[name]}
                        label={label}
                    />
                ))}
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <button className="black_btn" type="submit">Login</button>
                    <Link to="/register" className="black_btn" type="button">Register</Link>
                </div>
            </form>
        </div >
    )
};
const mapDispatchToProps = dispatch => {
    return {
        LoginUser: (email, password, history) => (
            dispatch(SignInAction(email, password, history))
        )
    }
}
export default connect(null, mapDispatchToProps)(LoginPage);

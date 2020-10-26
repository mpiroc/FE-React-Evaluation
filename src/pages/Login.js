import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { authenticateUser } from '../action-creators'
import logo from '../logo.png';
import './Login.css';

export default function Login() {
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = ({ username }) => dispatch(authenticateUser(username))

    return (
        <div className="login-container">
            <div className="login-logo-container">
                <img className="login-noinc-logo" src={logo} alt="no.inc logo" />
            </div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <p className="login-label">Login to Our Magic Portal</p>
                <input type="text" name="username" placeholder="Username" autoComplete="username" ref={register({
                    required: "Required",
                    minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters long"
                    },
                    maxLength: {
                        value: 40,
                        message: "Username may not be longer than 40 character"
                    },
                    pattern: {
                        value: /^\w+$/i,
                        message: "Username may only contain word characters"
                    }
                })}/>
                {errors.username && errors.username.message}

                <input type="password" name="password" placeholder="Password" autoComplete="current-password" ref={register({
                    required: "Required",
                    minLength: {
                        value: 12,
                        message: "Password must be at least 12 characters long"
                    },
                    maxLength: {
                        value: 80,
                        message: "Password may not be longer than 80 characters"
                    },
                    pattern: {
                        value: /^\w+$/i,
                        message: "Password may only contain word characters"
                    }
                })}/>
                {errors.password && errors.password.message}
                
                <input id="login-submit-button" type="submit" value="Login" />
            </form>
        </div>
    )
}

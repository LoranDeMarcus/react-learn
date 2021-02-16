import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ 'input' } type={ 'text' } name={ 'login' } placeholder={ 'Email' } />
            </div>
            <div>
                <Field component={ 'input' } type={ 'password' } name={ 'password' } placeholder={ 'Password' } />
            </div>
            <div>
                <Field component={ 'input' } type={ 'checkbox' } name={ 'rememberMe' } /> remember me
            </div>
            <div>
                <button type={ 'submit' }>
                    Login
                </button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={ onSubmit } />
        </>
    );
};

export default Login;
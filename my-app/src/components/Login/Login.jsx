import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsController/FormController';
import { requiredField } from '../../utils/validators/validators';

import styles from './Login.module.css';

const Input = Element('input');

const LoginForm = (props) => {
    return (
        <div className={ styles.wrapper }>
            <h2 className={ styles.title }>
                <i className="fas fa-sign-in-alt" /> &nbsp;Login
            </h2>
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field
                        component={ Input }
                        validate={ [requiredField] }
                        type={ 'text' }
                        name={ 'login' }
                        placeholder={ 'Email' }
                        className={ styles.input }
                    />
                </div>
                <div>
                    <Field
                        component={ Input }
                        validate={ [requiredField] }
                        type={ 'password' }
                        name={ 'password' }
                        placeholder={ 'Password' }
                        className={ styles.input }
                    />
                </div>
                <div>
                    <label className={ styles.checkboxLabel }>
                        <Field
                            component={ Input }
                            validate={ [requiredField] }
                            type={ 'checkbox' }
                            name={ 'rememberMe' }
                            className={ styles.checkbox }
                        /> &nbsp;remember me
                    </label>
                </div>
                <div>
                    <button
                        type={ 'submit' }
                        className={ styles.button }
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <LoginFormRedux onSubmit={ onSubmit } />
    );
};

export default Login;
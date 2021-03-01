import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsController/FormController';
import { requiredField } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

import styles from './Login.module.css';
import style from '../common/FormsController/FormController.module.css';

const Input = Element('input');

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div className={ styles.wrapper }>
            <h2 className={ styles.title }>
                <i className="fas fa-sign-in-alt" /> &nbsp;Login
            </h2>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field
                        component={ Input }
                        validate={ [requiredField] }
                        type={ 'text' }
                        name={ 'email' }
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
                { captchaUrl &&
                    <>
                        <img src={ captchaUrl } alt={ 'captchaUrl' } />
                        <Field
                            component={ Input }
                            validate={ [requiredField] }
                            type={ 'text' }
                            name={ 'captcha' } /* todo: не выводится капча*/
                            placeholder={ 'Symbols from image' }
                            className={ styles.input }
                        />
                    </>
                }
                { error ? <div className={ style.formSummaryError }>{ error }</div> : '' }
                <div>
                    { /*TODO: при сабмите редиректить на странцу профиля*/ }
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
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={ '/profile' } />;
    }

    return (
        <LoginFormRedux onSubmit={ onSubmit } captcha={ props.captchaUrl } />
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);

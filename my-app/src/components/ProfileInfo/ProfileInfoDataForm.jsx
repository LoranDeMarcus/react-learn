import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ContactDataForm from './ContactDataForm';
import { Element } from '../common/FormsController/FormController';

import styles from './ProfileInfo.module.css';
import style from '../common/FormsController/FormController.module.css';

const Input = Element('input');
const Textarea = Element('textarea');

const ProfileInfoDataForm = ({ handleSubmit, profile, isOwner, toggleEditMode, error }) => {
    return (
        <form onSubmit={ handleSubmit }>
            { isOwner &&
            <button className={ styles.edit } onClick={ toggleEditMode }>
                <i className="fas fa-save" />
            </button>
            }
            { error ? <div className={ style.formSummaryError }>{ error }</div> : '' }
            <div>
                <span className={ styles.title }>
                    <i className="fa fa-briefcase" />
                    Full name:
                </span>
                <div className={ styles.main }>
                    <Field
                        component={ Input }
                        type={ 'text' }
                        name={ 'fullName' }
                        placeholder={ 'Full name' }
                        className={ styles.input }
                    />
                </div>
            </div>
            <div>
                <span className={ styles.title }>
                    <i className="fa fa-briefcase" />
                    Looking for job:
                </span>
                <div className={ styles.main }>
                    <Field
                        component={ Input }
                        type={ 'checkbox' }
                        name={ 'lookingForAJob' }
                        textstyles={ styles.text }
                        text={ 'Are you looking for a job?' }
                    />
                </div>
            </div>
            <div>
                <span className={ styles.title }>
                    <i className="fas fa-keyboard" />
                    My professional skills:
                </span>
                <div className={ styles.main }>
                    <Field
                        component={ Textarea }
                        type={ 'textarea' }
                        name={ 'lookingForAJobDescription' }
                        placeholder={ 'My professional skills' }
                        className={ styles.textarea }
                    />
                </div>
            </div>
            <div>
                <span className={ styles.title }>
                    <i className="fas fa-user" />
                    About me:
                </span>
                <div className={ styles.main }>
                    <Field
                        component={ Input }
                        type={ 'text' }
                        name={ 'aboutMe' }
                        placeholder={ 'About me' }
                        className={ styles.input }
                    />
                </div>
            </div>
            <div>
                <span className={ styles.title }>
                    Contacts:
                </span>
                <div>
                    { Object.keys(profile.contacts).map(key => {
                        return <ContactDataForm key={ key } contacts={ 'contacts.' + key } contactTitle={ key } />;
                    }) }
                </div>
            </div>
        </form>
    );
};

const ProfileInfoDataFormRedux = reduxForm({ form: 'edit-profile' })(ProfileInfoDataForm);

export default ProfileInfoDataFormRedux;

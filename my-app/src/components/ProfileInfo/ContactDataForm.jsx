import React from 'react';
import { Field } from 'redux-form';
import { Element } from '../common/FormsController/FormController';

import styles from './ProfileInfo.module.css';

const Input = Element('input');

const ContactDataForm = ({ contactTitle, contacts }) => {
    return (
        <div>
            <span className={ styles.title }>
                <i className="fas fa-link" />
                { contactTitle }
            </span>
            <div className={ styles.main }>
                <Field
                    component={ Input }
                    type={ 'text' }
                    name={ contacts }
                    placeholder={ contactTitle }
                    className={ styles.input }
                />
            </div>
        </div>
    );
};

export default ContactDataForm;

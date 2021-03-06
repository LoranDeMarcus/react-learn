import React from 'react';

import styles from './ProfileInfo.module.css';

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <span className={ styles.title }>
                <i className="fas fa-link" />
                { contactTitle }
            </span>
            <div className={ styles.main }>
                { contactValue }
            </div>
        </div>
    );
};

export default Contact;

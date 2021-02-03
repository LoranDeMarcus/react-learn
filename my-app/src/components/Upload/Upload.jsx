import React from 'react';
import styles from './upload.module.css';

const Upload = ({ className }) => {
    return (
        <div className={ styles[className] }>
            <label className={ styles.edit }>
                <i className="fas fa-camera"/>
                <input type="file" className={ styles.action }/>
            </label>
        </div>
    );
};

export default Upload;
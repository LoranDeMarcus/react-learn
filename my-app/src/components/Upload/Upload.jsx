import React from 'react';

import styles from './upload.module.css';

const Upload = ({ className, savePhoto }) => {

    const photoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={ styles[className] }>
            <label className={ styles.edit }>
                <i className="fas fa-camera" />
                <input type="file" className={ styles.action } onChange={photoSelected} />
            </label>
        </div>
    );
};

export default Upload;

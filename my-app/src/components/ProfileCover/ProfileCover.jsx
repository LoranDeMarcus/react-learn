import React from 'react';
import profileImg from './profile-image.jpg';
import Upload from '../Upload/Upload';
import Author from '../Author/Author';

import styles from './ProfileCover.module.css';

const ProfileCover = () => {
    return (
        <div className={ styles.block }>
            <figure className={ styles.figure }>
                <Upload className="pp"/>
                <img src={ profileImg } alt="" className={ styles.img }/>
            </figure>
            <Author/>
        </div>
    );
};

export default ProfileCover;
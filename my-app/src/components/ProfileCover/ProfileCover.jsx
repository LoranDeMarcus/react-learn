import React from 'react';
import profileImg from './profile-image.jpg';
import Upload from '../Upload/Upload';
import Author from '../Author/Author';

import styles from './ProfileCover.module.css';

const ProfileCover = (props) => {
    return (
        <div className={ styles.block }>
            <figure className={ styles.figure }>
                <Upload className="pp" />
                <img src={ profileImg } alt="Background" className={ styles.img } />
            </figure>
            <Author isOwner={props.isOwner} profile={props.profile} savePhoto={props.savePhoto} />
        </div>
    );
};

export default ProfileCover;

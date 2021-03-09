import React from 'react';
import defaultAvatar from '../../assets/images/defaultImg.png';
import Upload from '../Upload/Upload';
import Navbar from '../Navbar/Navbar';

import styles from './Author.module.css';

const Author = (props) => {
    return (
        <div className={ styles.section }>
            <div className={ styles.block }>
                <div className={ styles.thumb }>
                    { props.isOwner && <Upload className="dp" savePhoto={ props.savePhoto } /> }
                    <img src={ props.profile.photos.small ? props.profile.photos.small : defaultAvatar } alt="Avatar"
                         className={ styles.img } />
                </div>
                <div className={ styles.title }>
                    <span className={ styles.name }>{ props.profile.fullName }</span>
                    <div className={ styles.country }>
                        Ontario, CA
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Author;

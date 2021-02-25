import React from 'react';
import avatar from '../Header/avatar.jpg';
import Upload from '../Upload/Upload';
import Navbar from '../Navbar/Navbar';

import styles from './Author.module.css';

const Author = (props) => {
    return (
        <div className={ styles.section }>
            <div className={ styles.block }>
                <div className={ styles.thumb }>
                    <img src={ props.profile.photos.small ? props.profile.photos.small : avatar } alt="Avatar"
                         className={ styles.img } />
                    { props.isOwner && <Upload className="dp" savePhoto={ props.savePhoto } /> } {/* TODO: тут разобраться как передать имя класса dp */ }
                </div>
                <div className={ styles.title }>
                    <a href="#" className={ styles.name }>{ props.profile.fullName }</a>
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

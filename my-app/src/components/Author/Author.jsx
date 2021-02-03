import React from 'react';
import avatar from '../Header/avatar.jpg';
import Upload from '../Upload/Upload';
import Navbar from '../Navbar/Navbar';

import styles from './Author.module.css';

const Author = () => {
    return (
        <div className={ styles.section }>
            <div className={ styles.block }>
                <div className={ styles.thumb }>
                    <Upload className="dp"/> {/* TODO: тут разобраться как передать имя класса dp */ }
                    <img src={ avatar } alt="" className={ styles.img }/>
                </div>
                <div className={ styles.title }>
                    <a href="#" className={ styles.name }>Jack Carter</a>
                    <div className={ styles.country }>
                        Ontario, CA
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    );
};

export default Author;
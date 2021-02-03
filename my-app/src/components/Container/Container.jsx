import React from 'react';
import ProfileCover from '../ProfileCover/ProfileCover';
import ProfileMain from '../ProfileMain/ProfileMain';

import styles from './container.module.css';

const Container = (props) => {
    return (
        <section className={ styles.container }>
            <ProfileCover />
            <ProfileMain store={ props.store } />
        </section>
    );
};

export default Container;
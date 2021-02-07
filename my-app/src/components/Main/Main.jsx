import React from 'react';
import Container from '../Container/Container';

import styles from './Main.module.css';
import ProfileCover from '../ProfileCover/ProfileCover';
import ProfileMain from '../ProfileMain/ProfileMain';

const Main = (props) => {
    return (
        <main className={ styles.main }>
            <Container store={ props.store } >
                <ProfileCover />
                <ProfileMain store={ props.store } />
            </Container>
        </main>
    );
};

export default Main;
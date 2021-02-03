import React from 'react';
import Container from '../Container/Container';

import styles from './Main.module.css';

const Main = (props) => {
    return (
        <main className={ styles.main }>
            <Container store={ props.store } />
        </main>
    );
};

export default Main;
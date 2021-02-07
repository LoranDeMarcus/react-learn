import React from 'react';

import styles from './container.module.css';

const Container = (props) => {
    return (
        <section className={ styles.container }>
            { props.children }
        </section>
    );
};

export default Container;
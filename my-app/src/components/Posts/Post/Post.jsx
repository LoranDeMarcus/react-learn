import React from 'react';

import styles from './Post.module.css';

const Posts = (props) => {
    return (
        <span className={ styles.text }>
            { props.message }
        </span>
    );
};

export default Posts;
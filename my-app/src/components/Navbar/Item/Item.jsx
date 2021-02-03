import React from 'react';

import styles from './Item.module.css';

const Item = (props) => {
    const isActive = props.active ? styles.link_active : '';

    return (
        <li className={ styles.item }>
            <a href="" className={ `${ styles.link } ${ isActive }` }>
                { props.text }
            </a>
        </li>
    );
};

export default Item;
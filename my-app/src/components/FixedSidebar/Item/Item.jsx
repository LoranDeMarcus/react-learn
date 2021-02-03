import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Item.module.css';

const Item = (props) => {
    return (
        <li className={ styles.li }>
            <NavLink
                className={ styles.link }
                to={ props.link }
                activeClassName={ styles.active }
            >
                { props.icon }
            </NavLink>
        </li>
    );
};

export default Item;
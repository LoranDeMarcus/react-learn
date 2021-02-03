import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './User.module.css';

const User = (props) => {
    return (
        <li className={ styles.user }>
            <NavLink to={ props.path } className={ styles.link } activeClassName={ styles.active }>
                <figure>
                    <img src={ props.avatar } alt="" />
                    <span className={ `${ styles.status } ${ props.online ? styles.online : '' }` } />
                </figure>
                <span className={ styles.name }>
                    <h6>{ props.name } { props.secondName }</h6>
                    <span className={ styles.lastMessage }>
                        { props.lastMessage }
                    </span>
                </span>
            </NavLink>
        </li>
    );
};

export default User;
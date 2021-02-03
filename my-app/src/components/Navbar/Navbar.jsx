import React from 'react';
import Item from './Item/Item';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={ styles.navbar }>
            <Item text='About' active='true'/>
            <Item text='Videos'/>
            <Item text='History'/>
            <Item text='Followers'/>
            <Item text='Follow'/>
            <Item text='Community'/>
        </ul>
    );
};

export default Navbar;
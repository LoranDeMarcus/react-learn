import React from 'react';
import Info from './Info/Info';
import Block from '../Block/Block';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

import styles from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <aside className={ styles.block }>
            <Block title='Status'>
                <ProfileStatus
                    status={ props.status }
                    updateUserStatus={ props.updateUserStatus }
                />
            </Block>
            <Block title='Personal Info'>
                <Info profile={ props.profile } />
            </Block>
        </aside>
    );
};

export default Sidebar;
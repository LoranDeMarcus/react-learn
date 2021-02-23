import React from 'react';
import Info from './Info/Info';
import Block from '../common/Block/Block';

import styles from './Sidebar.module.css';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

const Sidebar = ({status, updateUserStatus, profile }) => {
    return (
        <aside className={ styles.block }>
            <Block title='Status'>
                <ProfileStatusWithHooks
                    status={ status }
                    updateUserStatus={ updateUserStatus }
                />
            </Block>
            <Block title='Personal Info'>
                <Info profile={ profile } />
            </Block>
        </aside>
    );
};

export default Sidebar;

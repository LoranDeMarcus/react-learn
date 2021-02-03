import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProfileGeneral from '../ProfileGeneral/ProfileGeneral';

import styles from './ProfileMain.module.css';

const ProfileMain = (props) => {
    return (
        <div className={ styles.main }>
            <Sidebar />
            <ProfileGeneral store={ props.store } />
        </div>
    );
};

export default ProfileMain;
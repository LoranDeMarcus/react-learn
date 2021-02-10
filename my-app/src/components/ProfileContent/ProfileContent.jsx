import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProfileGeneral from '../ProfileGeneral/ProfileGeneral';

import styles from './ProfileContent.module.css';

const ProfileContent = (props) => {
    return (
        <div className={ styles.main }>
            <Sidebar profile={ props.profile } />
            <ProfileGeneral profile={ props.profile } />
        </div>
    );
};

export default ProfileContent;
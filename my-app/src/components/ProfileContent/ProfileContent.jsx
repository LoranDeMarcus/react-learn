import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProfileGeneral from '../ProfileGeneral/ProfileGeneral';

import styles from './ProfileContent.module.css';

const ProfileContent = (props) => {
    return (
        <div className={ styles.main }>
            <Sidebar
                isOwner={props.isOwner}
                profile={ props.profile }
                status={ props.status }
                updateUserStatus={ props.updateUserStatus }
                saveProfile={props.saveProfile}
            />
            <ProfileGeneral profile={ props.profile } />
        </div>
    );
};

export default ProfileContent;

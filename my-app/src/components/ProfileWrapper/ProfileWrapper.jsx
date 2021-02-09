import React from 'react';
import ProfileCover from '../ProfileCover/ProfileCover';
import ProfileContent from '../ProfileContent/ProfileContent';

const ProfileWrapper = (props) => {
    return (
        <>
            <ProfileCover />
            <ProfileContent store={ props.store } />
        </>
    );
};

export default ProfileWrapper;
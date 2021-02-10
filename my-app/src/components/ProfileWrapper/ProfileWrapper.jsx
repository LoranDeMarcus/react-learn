import React from 'react';
import ProfileCover from '../ProfileCover/ProfileCover';
import ProfileContent from '../ProfileContent/ProfileContent';
import Preloader from '../common/Preloader/Preloader';

const ProfileWrapper = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <>
            <ProfileCover profile={ props.profile } />
            <ProfileContent profile={ props.profile } />
        </>
    );
};

export default ProfileWrapper;
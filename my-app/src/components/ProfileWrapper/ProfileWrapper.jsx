import React from 'react';
import ProfileCover from '../ProfileCover/ProfileCover';
import ProfileContent from '../ProfileContent/ProfileContent';
import Preloader from '../common/Preloader/Preloader';

const ProfileWrapper = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <>
            <ProfileCover isOwner={props.isOwner} profile={ props.profile } savePhoto={props.savePhoto} />
            <ProfileContent
                profile={ props.profile }
                status={ props.status }
                updateUserStatus={props.updateUserStatus}
            />
        </>
    );
};

export default ProfileWrapper;

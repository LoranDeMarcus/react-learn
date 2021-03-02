import React from 'react';
import Container from '../Container/Container';
import ProfileWrapperContainer from '../ProfileWrapper/ProfileWrapperContainer';

const ProfileMain = (props) => {
    return (
        <main>
            <Container>
                <ProfileWrapperContainer />
            </Container>
        </main>
    );
};

export default ProfileMain;

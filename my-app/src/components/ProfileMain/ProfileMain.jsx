import React from 'react';
import Container from '../Container/Container';
import ProfileWrapperContainer from '../ProfileWrapper/ProfileWrapperContainer';

const ProfileMain = (props) => {
    return (
        <main>
            <Container>
                <ProfileWrapperContainer store={ props.store } />
            </Container>
        </main>
    );
};

export default ProfileMain;
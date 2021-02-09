import React from 'react';
import Container from '../Container/Container';
import ProfileWrapper from '../ProfileWrapper/ProfileWrapper';

const ProfileMain = (props) => {
    return (
        <main>
            <Container>
                <ProfileWrapper store={ props.store } />
            </Container>
        </main>
    );
};

export default ProfileMain;
import Container from '../Container/Container';
import React from 'react';
import UsersContainer from '../Users/UsersContainer';

const UsersMain = () => {
    return (
        <main>
            <Container>
                <UsersContainer />
            </Container>
        </main>
    );
};

export default UsersMain;
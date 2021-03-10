import Container from '../Container/Container';
import React from 'react';
import UsersContainer from '../Users/UsersContainer';

const UsersMain = (props: any) => {
    return (
        <main>
            <Container>
                <UsersContainer {...props} />
            </Container>
        </main>
    );
};

export default UsersMain;
import React from 'react';
import { Redirect } from 'react-router';

const Newsfeed = (props) => {
    if (props.state.auth.isAuth === false) return <Redirect to='/login' />
    return (
        <h1>
            Newsfeed
        </h1>
    )
}

export default Newsfeed;
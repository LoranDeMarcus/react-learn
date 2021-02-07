import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC, toggleFollowAC } from '../../redux/users-reducers';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
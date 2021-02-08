import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setTotalUsersCountAC, setUsersAC, toggleFollowAC, togglePageAC } from '../../redux/users-reducers';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        togglePage: (currentPage) => {
            dispatch(togglePageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
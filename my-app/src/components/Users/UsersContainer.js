import React from 'react';
import { connect } from 'react-redux';
import {
    getUsers,
    toggleFollow,
    toggleFollowing,
    toggleFollowingProgress,
    togglePage
} from '../../redux/users-reducers';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNum) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNum, pageSize);
    };

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={ this.props.totalUsersCount }
                       pageSize={ this.props.pageSize }
                       currentPage={ this.props.currentPage }
                       users={ this.props.users }
                       onPageChanged={ this.onPageChanged }
                       followingInProgress={ this.props.followingInProgress }
                       toggleFollowing={ this.props.toggleFollowing }
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    };
};

const dispatches = {
    toggleFollow,
    togglePage,
    toggleFollowingProgress,
    getUsers,
    toggleFollowing
};

export default compose(
    connect(mapStateToProps, dispatches))(UsersContainer);

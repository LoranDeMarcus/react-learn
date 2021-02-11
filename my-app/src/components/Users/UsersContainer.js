import React from 'react';
import { connect } from 'react-redux';
import {
    getUsers,
    toggleFollow,
    toggleFollowingProgress,
    toggleFollows,
    togglePage
} from '../../redux/users-reducers';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={ this.props.totalUsersCount }
                   pageSize={ this.props.pageSize }
                   currentPage={ this.props.currentPage }
                   users={ this.props.users }
                   onPageChanged={ this.onPageChanged }
                   toggleFollow={ this.props.toggleFollow }
                   toggleFollowingProgress={ this.props.toggleFollowingProgress }
                   followingInProgress={ this.props.followingInProgress }
            />
        </>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

const dispatches = {
    toggleFollow,
    togglePage,
    toggleFollowingProgress,
    getUsers,
    toggleFollows
};

export default connect(mapStateToProps, dispatches)(UsersContainer);
import React from 'react';
import { connect } from 'react-redux';
import {
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleFollowingProgress,
    toggleIsFetching,
    togglePage
} from '../../redux/users-reducers';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../API/API';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsersRequest(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount > 100 ? 100 : data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.togglePage(pageNum);
        this.props.toggleIsFetching(true);
        usersAPI.getUsersRequest(pageNum, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
    setUsers,
    togglePage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
};

export default connect(mapStateToProps, dispatches)(UsersContainer);
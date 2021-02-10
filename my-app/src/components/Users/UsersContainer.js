import React from 'react';
import { connect } from 'react-redux';
import {
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching,
    togglePage
} from '../../redux/users-reducers';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount > 100 ? 100 : response.data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.togglePage(pageNum);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNum }&count=${ this.props.pageSize }`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    };
};

const dispatches = {
    toggleFollow,
    setUsers,
    togglePage,
    setTotalUsersCount,
    toggleIsFetching
};

export default connect(mapStateToProps, dispatches)(UsersContainer);
import React from 'react';
import { connect } from 'react-redux';
import { actions, getUsers, toggleFollowing } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    gettotalItemsCount
} from '../../redux/users-selectors';
import { UserType } from "../../Types/types";
import { AppStateType } from "../../redux/redux-store";

const { toggleFollow, togglePage, toggleFollowingProgress} = actions;

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalItemsCount: number
    users: Array<UserType>,
    followingInProgress: Array<number>,
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void,
    toggleFollowing: (id: number) => void,
    onPageChanged: (pageNum: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNum: number) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNum, pageSize);
    };

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalItemsCount={ this.props.totalItemsCount }
                       pageSize={ this.props.pageSize }
                       currentPage={ this.props.currentPage } //
                       users={ this.props.users }
                       onPageChanged={ this.onPageChanged } //
                       followingInProgress={ this.props.followingInProgress }
                       toggleFollowing={ this.props.toggleFollowing } //
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: gettotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

const dispatches = {
    toggleFollow,
    togglePage,
    toggleFollowingProgress,
    getUsers,
    toggleFollowing
};

// @ts-ignore
export default compose( connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, dispatches))(UsersContainer);

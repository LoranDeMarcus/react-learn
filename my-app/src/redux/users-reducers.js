import {
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_FOLLOW,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    TOGGLE_PAGE
} from './types';
import { usersAPI } from '../API/API';

const initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            isFollowed: !user.isFollowed
                        };
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case TOGGLE_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            };
        }
        default: {
            return state;
        }
    }
};

export const toggleFollow = (id) => ({
    type: TOGGLE_FOLLOW,
    id
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const togglePage = (currentPage) => ({
    type: TOGGLE_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleFollowingProgress = (isFetching, id) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
});

export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(togglePage(page));

    const response = await usersAPI.getUsersRequest(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount > 120 ? 120 : response.totalCount));
};

export const toggleFollowing = (id) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));

    const response = await usersAPI.toggleFollow(id);
    if (response.resultCode === 0) {
        dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
};

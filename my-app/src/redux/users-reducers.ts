import {
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_FOLLOW,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    TOGGLE_PAGE
} from './types';
import { usersAPI } from '../API/API';
import { UserType } from "../Types/types";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

type InitialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: any): InitialStateType => {
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

type ToggleFollowActionType = {
    type: typeof TOGGLE_FOLLOW,
    id: number
}

export const toggleFollow = (id: number): ToggleFollowActionType => ({
    type: TOGGLE_FOLLOW,
    id
});

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
    type: SET_USERS,
    users
});

type TogglePageActionType = {
    type: typeof TOGGLE_PAGE,
    currentPage: number
}

export const togglePage = (currentPage: number): TogglePageActionType => ({
    type: TOGGLE_PAGE,
    currentPage
});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    id: number
}

export const toggleFollowingProgress = (isFetching: boolean, id: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
});

export const getUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(togglePage(page));

    const response = await usersAPI.getUsersRequest(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount > 120 ? 120 : response.totalCount));
};

export const toggleFollowing = (id: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id));

    const response = await usersAPI.toggleFollow(id);
    if (response.resultCode === 0) {
        dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
};
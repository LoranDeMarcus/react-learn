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
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 8,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type ActionsTypes = ToggleFollowActionType | SetUsersActionType
    | TogglePageActionType | SetTotalItemsCountActionType
    | ToggleIsFetchingActionType | ToggleFollowingProgressActionType;

type InitialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
                totalItemsCount: action.totalItemsCount
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

type SetTotalItemsCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalItemsCount: number
}

export const settotalItemsCount = (totalItemsCount: number): SetTotalItemsCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalItemsCount
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true));
        dispatch(togglePage(page));

        const response = await usersAPI.getUsersRequest(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(settotalItemsCount(response.totalCount));
    };
}

export const toggleFollowing = (id: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));

        const response = await usersAPI.toggleFollow(id);
        if (response.resultCode === 0) {
            dispatch(toggleFollow(id));
        }
        dispatch(toggleFollowingProgress(false, id));
    };
}

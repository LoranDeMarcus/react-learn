import { UserType } from "../Types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { usersAPI } from "../API/users-api";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 8,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    toggleFollow: (id: number) => ({
        type: 'TOGGLE_FOLLOW',
        id
    } as const),
    setUsers: (users: Array<UserType>) => ({
        type: 'SET_USERS',
        users
    } as const),
    togglePage: (currentPage: number) => ({
        type: 'TOGGLE_PAGE',
        currentPage
    } as const),
    settotalItemsCount: (totalItemsCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        totalItemsCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, id: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        id
    } as const)
}

type ThunkType = BaseThunkType<ActionsTypes>;

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW': {
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
        case 'SET_USERS': {
            return {
                ...state,
                users: action.users
            };
        }
        case 'TOGGLE_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            };
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

export const getUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.togglePage(page));

        const response = await usersAPI.getUsersRequest(page, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(response.items));
        dispatch(actions.settotalItemsCount(response.totalCount));
    };
}

export const toggleFollowing = (id: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFollowingProgress(true, id));

        const response = await usersAPI.toggleFollow(id);
        if (response.resultCode === 0) {
            dispatch(actions.toggleFollow(id));
        }
        dispatch(actions.toggleFollowingProgress(false, id));
    };
}

import { SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_FOLLOW, TOGGLE_IS_FETCHING, TOGGLE_PAGE } from './types';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
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
})
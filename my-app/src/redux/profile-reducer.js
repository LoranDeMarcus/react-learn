import { ADD_POST, DELETE_POST, SET_USER_PROFILE, SET_USER_STATUS } from './types';
import { profileAPI, usersAPI } from '../API/API';

const initialState = {
    posts: [
        {
            id: 1,
            message: 'my first post'
        },
        {
            id: 2,
            message: 'hello there'
        },
        {
            id: 3,
            message: 'general'
        },
        {
            id: 4,
            message: 'kenobi'
        },
        {
            id: 5,
            message: '+rep'
        }
    ],
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 6,
                    message: action.newPostText
                }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        }
        default:
            return state;
    }
};

export const addPostCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    };
};

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUsersProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            if (!data) {
                data = 'Change status';
                dispatch(setUserStatus(data));
            }
            dispatch(setUserStatus(data));
        });
    };
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    };
};

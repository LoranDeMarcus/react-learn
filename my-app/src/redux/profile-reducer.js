import { ADD_POST, DELETE_POST, SAVE_PHOTO_SUCCESS, SET_USER_PROFILE, SET_USER_STATUS } from './types';
import { profileAPI } from '../API/API';
import { stopSubmit } from 'redux-form';

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
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
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
    };
};

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    };
};

export const getUsersProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getUsersProfile(userId);
    dispatch(setUserProfile(response));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    if (!response) {
        response = 'Change status';
        dispatch(setUserStatus(response));
    }
    dispatch(setUserStatus(response));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('edit-profile', { _error: message }));
        return Promise.reject(message);
    }
};

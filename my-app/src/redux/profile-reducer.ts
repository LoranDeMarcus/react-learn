import { ResultCodesEnum } from '../API/API';
import { FormAction, stopSubmit } from 'redux-form';
import { PhotosType, PostsType, ProfileType } from "../Types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { profileAPI } from "../API/profile-api";

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
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

export const actions = {
    addPostCreator: (newPostText: string) => ({
        type: 'ADD_POST',
        newPostText
    } as const),
    setUserProfile: (profile: ProfileType) => ({
        type: 'SET_USER_PROFILE',
        profile
    } as const),
    setUserStatus: (status: string) => ({
        type: 'SET_USER_STATUS',
        status
    } as const),
    deletePost: (postId: number) => ({
        type: 'DELETE_POST',
        postId
    } as const),
    savePhotoSuccess: (photos: PhotosType) => ({
        type: 'SAVE_PHOTO_SUCCESS',
        photos
    } as const)
}

export type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 6,
                    message: action.newPostText
                }]
            };
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET_USER_STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        case 'DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            };
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            };
        }
        default:
            return state;
    }
};

export const getUsersProfile = (userId: number | null): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.getUsersProfile(userId);
        dispatch(actions.setUserProfile(response));
    };
}

export const getUserStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
        if (!response) {
            response = 'Change status';
            dispatch(actions.setUserStatus(response));
        }
        dispatch(actions.setUserStatus(response));
    };
}

export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.updateUserStatus(status);
        if (response.resultCode === ResultCodesEnum.success) {
            dispatch(actions.setUserStatus(status));
        }
    };
}

export const savePhoto = (file: File): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.resultCode === ResultCodesEnum.success) {
            dispatch(actions.savePhotoSuccess(response.data.photos));
        }
    };
}

export const saveProfile = (profile: ProfileType): ThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        const response = await profileAPI.saveProfile(profile);
        if (response.resultCode === ResultCodesEnum.success) {
            await dispatch(getUsersProfile(userId));
        } else {
            const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
            dispatch(stopSubmit('edit-profile', { _error: message }));
            return Promise.reject(message);
        }
    };
}

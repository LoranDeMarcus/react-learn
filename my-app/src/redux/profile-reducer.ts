import { ADD_POST, DELETE_POST, SAVE_PHOTO_SUCCESS, SET_USER_PROFILE, SET_USER_STATUS } from './types';
import { profileAPI, ResultCodesEnum } from '../API/API';
import { stopSubmit } from 'redux-form';
import { PhotosType, PostsType, ProfileType } from "../Types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

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

export type InitialStateType = typeof initialState;

type ActionsTypes = AddPostCreatorActionType | SetUserProfileActionType
    | SetUserStatusActionType | DeletePostActionType | SavePhotoSuccessActionType;

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
                profile: { ...state.profile, photos: action.photos } as ProfileType
            };
        }
        default:
            return state;
    }
};

type AddPostCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

export const addPostCreator = (newPostText: string): AddPostCreatorActionType => {
    return {
        type: ADD_POST,
        newPostText
    };
};

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}

export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {
        type: SET_USER_STATUS,
        status
    };
};

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}

export const deletePost = (postId: number): DeletePostActionType => {
    return {
        type: DELETE_POST,
        postId
    };
};

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    };
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUsersProfile = (userId: number | null): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.getUsersProfile(userId);
        dispatch(setUserProfile(response));
    };
}

export const getUserStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
        if (!response) {
            response = 'Change status';
            dispatch(setUserStatus(response));
        }
        dispatch(setUserStatus(response));
    };
}

export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.updateUserStatus(status);
        if (response.resultCode === ResultCodesEnum.success) {
            dispatch(setUserStatus(status));
        }
    };
}

export const savePhoto = (file: any): ThunkType => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.resultCode === ResultCodesEnum.success) {
            dispatch(savePhotoSuccess(response.data.photos));
        }
    };
}

export const saveProfile = (profile: ProfileType): ThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        const response = await profileAPI.saveProfile(profile);
        if (response.resultCode === ResultCodesEnum.success) {
            await dispatch(getUsersProfile(userId)); // fixme: тут надо проверить тип у userId
        } else {
            const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
            // @ts-ignore
            dispatch(stopSubmit('edit-profile', { _error: message }));
            return Promise.reject(message);
        }
    };
}

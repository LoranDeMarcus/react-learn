import { SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS } from './types';
import { authAPI, securityAPI } from '../API/API';
import { stopSubmit } from 'redux-form';

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean | false,
    isAuth: boolean,
    captchaUrl: string | null

}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
};

type SetUserDataActionPayloadType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataActionPayloadType
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, email, login, isAuth
        }
    };
};

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl: string
    }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: { captchaUrl }
    };
};

export const authMe = () => async (dispatch: any) => {
    const response = await authAPI.authMeRequest();
    if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any)  => {
    const response = await authAPI.loginRequest(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        // @ts-ignore
        dispatch(setAuthUserData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logoutRequest();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

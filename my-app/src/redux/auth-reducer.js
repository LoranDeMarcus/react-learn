import { SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS } from './types';
import { authAPI, securityAPI } from '../API/API';
import { stopSubmit } from 'redux-form';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, email, login, isAuth
        }
    };
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: { captchaUrl }
    };
};

export const authMe = () => async (dispatch) => {
    const response = await authAPI.authMeRequest();
    if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.loginRequest(email, password, rememberMe, captcha);
    console.log(response);
    if (response.resultCode === 0) {
        dispatch(setAuthUserData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logoutRequest();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

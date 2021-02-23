import { SET_USER_DATA } from './types';
import { authAPI } from '../API/API';
import { stopSubmit } from 'redux-form';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
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

export const authMe = () => async (dispatch) => {
    const response = await authAPI.authMeRequest();
    if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.loginRequest(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(setAuthUserData());
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logoutRequest();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

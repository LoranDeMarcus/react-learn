import { SET_USER_DATA } from './types';
import { authAPI } from '../API/API';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (data) => {
    return {
        type: SET_USER_DATA,
        data
    };
};

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMeRequest().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data));
            }
        });
    }
}
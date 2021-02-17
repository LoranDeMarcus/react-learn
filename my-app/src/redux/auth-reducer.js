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

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMeRequest().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    console.log(email, password, rememberMe);
    return (dispatch) => {
        authAPI.loginRequest(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData());
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logoutRequest().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}
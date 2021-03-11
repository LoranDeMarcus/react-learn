import { CaptchaEnum, ResultCodesEnum } from '../API/API';
import { FormAction, stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { authAPI } from "../API/auth-api";
import { securityAPI } from "../API/security-api";

const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA',
        payload: { id, email, login, isAuth }
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS',
        payload: { captchaUrl }
    } as const)
}
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

type InitialStateType = {
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

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS': {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};


export const authMe = (): ThunkType => {
    return async (dispatch) => {
        const response = await authAPI.authMeRequest();
        if (response.resultCode === ResultCodesEnum.success) {
            const { id, email, login } = response.data;
            dispatch(actions.setAuthUserData(id, email, login, true));
        }
    };
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
    return async (dispatch) => {
        const response = await authAPI.loginRequest(email, password, rememberMe, captcha);
        if (response.resultCode === ResultCodesEnum.success) {
            // @ts-ignore
            dispatch(actions.setAuthUserData());
        } else {
            if (response.resultCode === CaptchaEnum.captcha) {
                await dispatch(getCaptchaUrl());
            }
            const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
            dispatch(stopSubmit('login', { _error: message }));
        }
    };
}

export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
    };
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        const response = await authAPI.logoutRequest();
        if (response.resultCode === ResultCodesEnum.success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }
    };
}

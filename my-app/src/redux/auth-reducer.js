import { SET_USER_DATA } from './types';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
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
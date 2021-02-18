import { INITIALIZED_SUCCESS } from './types';
import { authMe } from './auth-reducer';

const initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    };
};

export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    };
};
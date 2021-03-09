import { INITIALIZED_SUCCESS } from './types';
import { authMe } from './auth-reducer';
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

type InitialStateType = {
    initialized: boolean;
}

const initialState: InitialStateType = {
    initialized: false
};

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const appReducer = (state = initialState, action: InitializedSuccessActionType) => {
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

export const initializedSuccess = (): InitializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS
    };
};

type ThunkType = ThunkAction<void, AppStateType, unknown, InitializedSuccessActionType>

export const initializeApp = (): ThunkType => {
    return (dispatch) => {
        const promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    };
};

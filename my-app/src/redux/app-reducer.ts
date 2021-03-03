import { INITIALIZED_SUCCESS } from './types';
import { authMe } from './auth-reducer';

export type InitialStateType = {
    initialized: boolean;
}

const initialState: InitialStateType = {
    initialized: false
};

export type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const appReducer = (state = initialState, action: any) => {
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

export const initializeApp = () => {
    return (dispatch: any) => {
        const promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    };
};

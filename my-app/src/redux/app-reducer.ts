import { authMe } from './auth-reducer';
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./redux-store";

const initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = (): ThunkType => {
    return (dispatch) => {
        const promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(actions.initializedSuccess());
            });
    };
};

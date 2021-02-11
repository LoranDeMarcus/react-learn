import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE } from './types';
import { usersAPI } from '../API/API';
import { setTotalUsersCount, setUsers, toggleIsFetching } from './users-reducers';

const initialState = {
    posts: [
        {
            id: 1,
            message: 'my first post'
        },
        {
            id: 2,
            message: 'hello there'
        },
        {
            id: 3,
            message: 'general'
        },
        {
            id: 4,
            message: 'kenobi'
        },
        {
            id: 5,
            message: '+rep'
        }
    ],
    newPostText: '',
    profile: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 6,
                    message: state.newPostText
                }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const addPostCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUsersProfile = (userId) => {
    return (dispatch) => {
        usersAPI.setUsersProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
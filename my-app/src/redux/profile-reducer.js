import { ADD_POST, UPDATE_NEW_POST_TEXT } from './types';

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
    newPostText: ''
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
        default:
            return state;
    }
};
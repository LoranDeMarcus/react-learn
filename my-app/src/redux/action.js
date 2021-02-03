import { ADD_POST, UPDATE_NEW_POST_TEXT, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from './types';

// Profile action creators

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

// Dialogs action creators

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageBodyCreator = (newBody) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody
    };
};
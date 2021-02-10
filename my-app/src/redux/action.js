import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from './types';

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
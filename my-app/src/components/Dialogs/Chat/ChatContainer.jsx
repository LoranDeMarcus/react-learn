import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/action';
import Chat from './Chat';
import connect from 'react-redux/lib/connect/connect';

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        newMessageBody: state.messagesPage.newMessageBody,
        messagesPage: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
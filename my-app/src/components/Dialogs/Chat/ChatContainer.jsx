import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/action';
import Chat from './Chat';
import connect from 'react-redux/lib/connect/connect';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        newMessageBody: state.messagesPage.newMessageBody,
        messagesPage: state.messagesPage.messages
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Chat);
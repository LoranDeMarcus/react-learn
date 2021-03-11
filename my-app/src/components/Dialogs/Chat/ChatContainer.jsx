import React from 'react';
import { actions } from '../../../redux/messages-reducer';
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
        sendMessage: (message) => {
            dispatch(actions.sendMessageCreator(message))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Chat);
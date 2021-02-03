import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/action';
import Chat from './Chat';
import connect from 'react-redux/lib/connect/connect';


/*const ChatContainer = () => {
    const state = reduxStore.getState();
    const messagesElements = state.messagesPage.messages.map(message => {
        return <Message data={ state.messagesPage.dialogs } message={ message.message }
                        time={ message.time } />;
    });

    const newMessageBody = state.messagesPage.newMessageBody;

    const onSendMessageClick = () => {
        reduxStore.dispatch(sendMessageCreator());
    };

    const onMessageChange = (body) => {
        reduxStore.dispatch(updateNewMessageBodyCreator(body));
    };

    return <Chat
        dialogs={ state.messagesPage.dialogs }
        updateNewMessageBody={ onMessageChange }
        sendMessage={ onSendMessageClick }
        newMessageBody={ newMessageBody }>
        { messagesElements }
    </Chat>;
};*/

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        newMessageBody: state.messagesPage.newMessageBody
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
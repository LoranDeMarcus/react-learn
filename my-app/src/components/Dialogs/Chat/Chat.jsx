import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import store from '../../../redux/state';

import styles from './Chat.module.css';

const Chat = (props) => {
    const state = store.getState();
    const messagesElements = state.messagesPage.messages.map(message => {
        return <Message data={ state.messagesPage.dialogs } message={ message.message }
                        time={ message.time } />;
    });
    const newMessageBody = props.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={ styles.block }>
            <div className={ styles.head }>
                <User data={ props.dialogs } />
            </div>
            <ul className={ styles.messages }>
                { messagesElements }
            </ul>
            <div className={ styles.textbox }>
                <input
                    type="text"
                    placeholder='write your message here..'
                    value={ newMessageBody }
                    onChange={ onMessageChange }
                />
                <button type='button' onClick={ onSendMessageClick }>
                    <i className="fas fa-paper-plane" />
                </button>
            </div>
        </div>
    );
};

export default Chat;
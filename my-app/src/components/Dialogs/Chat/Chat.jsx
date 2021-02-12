import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import { Redirect } from 'react-router';

import styles from './Chat.module.css';

const Chat = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />

    const messagesElements = props.messagesPage.map(message => {
        return <Message data={ props.dialogs } message={ message.message } /* todo: переделать структура state */
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
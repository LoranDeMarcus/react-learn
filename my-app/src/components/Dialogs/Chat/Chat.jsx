import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import styles from './Chat.module.css';

const Chat = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />;

    const messagesElements = props.messagesPage.map(message => {
        return <Message data={ props.dialogs } message={ message.message } /* todo: переделать структура state */
                        time={ message.time } />;
    });

    const addNewMessage = (values) => {
        props.sendMessage(values.message);
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
                <ChatFormRedux onSubmit={ addNewMessage } />
            </div>
        </div>
    );
};

const ChatForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <Field
                component={ 'input' }
                name={ 'message' }
                type={ 'text' }
                placeholder={ 'write your message here..' }
            />
            <button type={ 'submit' }>
                <i className="fas fa-paper-plane" />
            </button>
        </form>
    );
};

const ChatFormRedux = reduxForm({ form: 'chat' })(ChatForm);

export default Chat;
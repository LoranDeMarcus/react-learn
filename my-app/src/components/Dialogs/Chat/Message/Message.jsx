import React from 'react';

import styles from './Message.module.css';

const Message = (props) => {
    const getMessageTime = () => {
        const d = new Date(),
            h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
            m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        const currentTime = `${ h }:${ m }`

        return props.time || currentTime;
    };

    return (
        <li className={ `${ styles.message } ${ styles.me }` }>
            <figure>
                <img src={ props.data[0].avatar } alt="" />
            </figure>
            <div className={ styles.chatbox }>
                <p className={ styles.text }>
                    { props.message }
                </p>
                <span className={ styles.time }>
                    <span className={ styles.message_status }>
                        <i className="fas fa-check" />
                        <i className="fas fa-check" />
                    </span>
                    { getMessageTime() }
                </span>
            </div>

        </li>
    );
};

export default Message;
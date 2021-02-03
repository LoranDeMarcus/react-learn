import React from 'react';
import User from './User/User';
import ChatContainer from './Chat/ChatContainer';

import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    const state = props.store.getState();
    const dialogsData = state.messagesPage.dialogs.map(dialog =>
        <User path={ `/messages/${ dialog.id }` }
              id={ dialog.id }
              avatar={ dialog.avatar }
              online={ dialog.online }
              name={ dialog.name }
              secondName={ dialog.secondName }
              lastMessage={ dialog.lastMessage }
        />
    );

    return (
        <div className={ styles.main }>
            <div className={ styles.messages }>
                <div className={ styles.messages_head }>
                    <h4>Chat Messages</h4>
                    <ul className={ styles.users }>
                        { dialogsData }
                    </ul>
                </div>
            </div>
            <ChatContainer store={ props.store } />
        </div>
    );
};

export default Dialogs;
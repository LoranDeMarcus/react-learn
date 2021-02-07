import React from 'react';
import Item from './Item/Item';

import styles from './FixedSidebar.module.css';

const FixedSidebar = () => {
    return (
        <div className={ styles.sidebar }>
            <ul className={ styles.menu }>
                <Item
                    title='Newsfeed Page'
                    link='/newsfeed'
                    icon={ <i className="fas fa-magnet" /> }
                />
                <Item
                    title='Profile'
                    link='/profile'
                    icon={ <i className="fas fa-user" /> } />
                <Item
                    title='Users'
                    link='/friends'
                    icon={ <i className="fas fa-users" /> } />
                <Item
                    title='Messages'
                    link='/messages'
                    icon={ <i className="fas fa-comment-alt" /> } />
            </ul>
        </div>
    );
};

export default FixedSidebar;
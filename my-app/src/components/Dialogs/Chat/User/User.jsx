import React from 'react';

import styles from './User.module.css';

const User = (props) => {
    return (
        <div className={ styles.user }>
            <figure>
                <img src={ props.data[0].avatar } alt="" />
                <span className={ `${ styles.status } ${ props.data[0].online ? styles.online : '' }` } />
            </figure>
            <div className={ styles.name_wrapper }>
                <h6 className={ styles.name }>
                    { props.data[0].name }
                </h6>
                <span className={ styles.status_text }>
                    { props.data[0].online ? 'Online' : 'Offline' }
                </span>
            </div>
        </div>
    );
};

export default User;
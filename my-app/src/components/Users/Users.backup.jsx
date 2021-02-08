import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import defaultImg from '../avatars/defaultImg.png';

const UsersBackup = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    const user = props.users.map(user => {
        return <div key={ user.id } className={ styles.box }>
            <figure>
                <img src='' alt="" className={ styles.bg } />
            </figure>
            <div className={ styles.meta }>
                <img src={ user.photos.small !== null ? user.photos.small : defaultImg } className={ styles.avatar } alt='' />
                <div className={ styles.name }>
                    <a href="" className={ styles.link }>
                        { user.name }
                    </a>
                    <span className={ styles.location }>
                        { 'user.location.city' }, { 'user.location.country' }
                    </span>
                </div>
                <ul className={ styles.info }>
                    <li>
                        { user.status }
                    </li>
                </ul>
                <button onClick={ () => {
                    props.toggleFollow(user.id);
                } } className={ styles.button }>
                    { user.isFollowed ? 'Unfollow' : 'Follow' }
                </button>
            </div>
        </div>;
    });

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            { user }
        </div>
    );
};

export default UsersBackup;
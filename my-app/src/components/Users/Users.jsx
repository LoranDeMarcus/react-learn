import React from 'react';
import styles from './Users.module.css';
import defaultImg from '../avatars/defaultImg.png';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => {
                        return <div key={ user.id } className={ styles.box }>
                            <figure>
                                <img src='' alt="" className={ styles.bg } />
                            </figure>
                            <div className={ styles.meta }>
                                <img src={ user.photos.small !== null ? user.photos.small : defaultImg }
                                     className={ styles.avatar } alt='' />
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
                                    this.props.toggleFollow(user.id);
                                } } className={ styles.button }>
                                    { user.isFollowed ? 'Unfollow' : 'Follow' }
                                </button>
                            </div>
                        </div>;
                    })
                }
            </div>
        );
    }
}


export default Users;
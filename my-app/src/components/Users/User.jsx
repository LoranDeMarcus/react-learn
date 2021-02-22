import React from 'react';
import defaultBg from '../../assets/images/defaultBg.jpg';
import { NavLink } from 'react-router-dom';
import defaultImg from '../../assets/images/defaultImg.png';

import styles from './Users.module.css';

const User = (props) => {
    return (
        <div className={ styles.box }>
            <figure>
                <img src={ defaultBg }
                     alt="" className={ styles.bg } />
            </figure>
            <div className={ styles.meta }>
                <NavLink to={ `/profile/${ props.user.id }` }>
                    <img src={ props.user.photos.small ? props.user.photos.small : defaultImg }
                         className={ styles.avatar } alt='' />
                </NavLink>
                <div className={ styles.name }>
                    <a href="" className={ styles.link }>
                        { props.user.name }
                    </a>
                    <span className={ styles.location }>
                                        { 'user.location.city' }, { 'user.location.country' }
                                    </span>
                </div>
                <ul className={ styles.info }>
                    <li>
                        { props.user.status }
                    </li>
                </ul>
                <button disabled={ props.followingInProgress.some(id => id === props.user.id) } onClick={ () => {
                    props.toggleFollowing(props.user.id);
                } } className={ styles.button }>
                    { props.user.isFollowed ? 'Unfollow' : 'Follow' } {/* TODO: когда уйдет 429, проверить кнопку  */ }
                </button>
            </div>
        </div>
    );
};

export default User;

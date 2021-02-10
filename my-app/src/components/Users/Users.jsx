import React from 'react';
import defaultImg from '../../assets/images/defaultImg.png';
import defaultBg from '../../assets/images/defaultBg.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

import styles from './Users.module.css';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        return <span onClick={ () => props.onPageChanged(page) }
                                     className={ ` ${ styles.pagItem } ${ props.currentPage === page && styles.selected } ` }>{ page }</span>;
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return <div key={ user.id } className={ styles.box }>
                        <figure>
                            <img src={ defaultBg }
                                 alt="" className={ styles.bg } />
                        </figure>
                        <div className={ styles.meta }>
                            <NavLink to={ `/profile/${ user.id }` }>
                                <img src={ user.photos.small ? user.photos.small : defaultImg }
                                     className={ styles.avatar } alt='' />
                            </NavLink>
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
                                axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`, {
                                    withCredentials: true
                                }).then(response => {
                                    if (response.data === false) {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '53f444d4-767d-44da-b452-21ca4aee6d91' /* TODO: запросы перенести в API */
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.toggleFollow(user.id);
                                            }
                                        });
                                    } else {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ user.id }`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '53f444d4-767d-44da-b452-21ca4aee6d91'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.toggleFollow(user.id);
                                            }
                                        });
                                    }
                                });

                            } } className={ styles.button }>
                                { user.isFollowed ? 'Unfollow' : 'Follow' } {/* TODO: когда уйдет 429, проверить кнопку  */}
                            </button>
                        </div>
                    </div>;
                })
            }
        </div>
    );
};

export default Users;
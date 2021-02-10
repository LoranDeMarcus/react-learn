import React from 'react';
import defaultImg from '../../assets/images/defaultImg.png';
import defaultBg from '../../assets/images/defaultBg.jpg';

import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to={`/profile/${user.id}`}>
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
                            <button onClick={ () => props.toggleFollow(user.id) } className={ styles.button }>
                                { user.isFollowed ? 'Unfollow' : 'Follow' }
                            </button>
                        </div>
                    </div>;
                })
            }
        </div>
    );
};

export default Users;
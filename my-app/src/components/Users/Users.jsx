import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';

import styles from './Users.module.css';

const Users = ({ totalUsersCount, pageSize, users, toggleFollowing, followingInProgress, onPageChanged, currentPage }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const allUsers = users.map(user => {
        return <User
            key={ user.id }
            user={ user }
            toggleFollowing={ toggleFollowing }
            followingInProgress={ followingInProgress }
        />;
    });

    const paginator = pages.map(page => {
        return <Paginator
            key={ page }
            page={ page }
            onPageChanged={ onPageChanged }
            currentPage={ currentPage }
        />;
    });

    return (
        <div>
            { allUsers }
            <div className={styles.pagination}>
                { paginator }
            </div>
        </div>
    );
};

export default Users;

import React, { FC } from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import { UserType } from "../../Types/types";

import styles from './Users.module.css';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    users: Array<UserType>,
    toggleFollowing: (id: number) => void,
    followingInProgress: Array<number>,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number
}

const Users: FC<PropsType> = ({ totalItemsCount, pageSize, users, toggleFollowing, followingInProgress, onPageChanged, currentPage }) => {

    const allUsers = users.map(user => {
        return <User
            key={ user.id }
            user={ user }
            toggleFollowing={ toggleFollowing }
            followingInProgress={ followingInProgress }
        />;
    });

    return (
        <div>
            { allUsers }
            <div className={styles.pagination}>
                <Paginator
                    totalItemsCount={ totalItemsCount }
                    pageSize={ pageSize }
                    onPageChanged={ onPageChanged }
                    currentPage={ currentPage }
                />
            </div>
        </div>
    );
};

export default Users;

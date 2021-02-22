import React from 'react';
import User from './User';

import styles from './Users.module.css';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const users = props.users.map(user => {
        return <User key={user.id}
                     user={ user }
                     toggleFollowing={ props.toggleFollowing }
                     followingInProgress={ props.followingInProgress }
        />;
    });

    return (
        <div>
            { users }
            <div>
                {
                    pages.map(page => {
                        return <span key={ page }
                                     onClick={ () => props.onPageChanged(page) }
                                     className={ ` ${ styles.pagItem }
                                     ${ props.currentPage === page && styles.selected } `
                                     }>
                            { page }
                        </span>;
                    })
                }
            </div>
        </div>
    );
};

export default Users;

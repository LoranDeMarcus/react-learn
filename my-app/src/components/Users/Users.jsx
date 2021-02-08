import React from 'react';
import defaultImg from '../avatars/defaultImg.png';
import * as axios from 'axios';

import styles from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount > 30 ? 30 : response.data.totalCount);
        });
    }

    onPageChanged = (pageNum) => {
        this.props.togglePage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map(page => {
                            return <span onClick={ () => this.onPageChanged(page) }
                                         className={ ` ${ styles.pagItem } ${ this.props.currentPage === page && styles.selected } ` }>{ page }</span>;
                        })
                    }
                </div>
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
                                <button onClick={ () => this.props.toggleFollow(user.id) }className={ styles.button }>
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
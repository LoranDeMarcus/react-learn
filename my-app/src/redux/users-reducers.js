import { SET_USERS, TOGGLE_FOLLOW } from './types';
import user1 from '../components/avatars/chatuser1.jpg';
import user2 from '../components/avatars/chatuser2.jpg';
import user3 from '../components/avatars/chatuser3.jpg';
import user4 from '../components/avatars/chatuser4.jpg';
import user5 from '../components/avatars/chatuser51.jpg';

const initialState = {
    users: [/* {
        id: 1,
        fullName: 'Artyom Kuzikov',
        avatar: user1,
        status: 'I am a boss',
        location: {
            city: 'Yoshkar-Ola',
            country: 'Russia'
        },
        isFollowed: false
    },
        {
            id: 2,
            fullName: 'Arnold',
            avatar: user2,
            status: 'Follow me',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            isFollowed: false
        },
        {
            id: 3,
            fullName: 'Alex Terrible',
            avatar: user4,
            status: 'New song coming soon',
            location: {
                city: 'Yekaterinburg',
                country: 'Russia'
            },
            isFollowed: false
        },
        {
            id: 4,
            fullName: 'Phil Bozeman',
            avatar: user5,
            status: 'New album tomorrow',
            location: {
                city: 'Knoxville',
                country: 'USA'
            },
            isFollowed: false
        },
        {
            id: 5,
            fullName: 'Andrew Martin',
            avatar: user3,
            status: 'Hi guys',
            location: {
                city: 'Toronto',
                country: 'Canada'
            },
            isFollowed: false
        } */]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            isFollowed: !user.isFollowed
                        };
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        }
        default: {
            return state;
        }
    }
};

export const toggleFollowAC = (id) => ({
    type: TOGGLE_FOLLOW,
    id
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});
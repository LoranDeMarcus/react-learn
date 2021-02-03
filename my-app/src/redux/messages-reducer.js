import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from './types';

import user1 from '../components/avatars/chatuser1.jpg';
import user2 from '../components/avatars/chatuser2.jpg';
import user3 from '../components/avatars/chatuser3.jpg';
import user4 from '../components/avatars/chatuser4.jpg';
import user5 from '../components/avatars/chatuser51.jpg';

const initialState = {
    dialogs: [
        {
            id: 1,
            avatar: user1,
            name: 'Andrew',
            secondName: 'Martin',
            online: true,
            lastMessage: 'you send a video - 2hrs ago'
        },
        {
            id: 2,
            avatar: user2,
            name: 'Julie',
            secondName: 'Robert',
            lastMessage: 'Hello?!'
        },
        {
            id: 3,
            avatar: user3,
            name: 'Frank',
            secondName: 'Will',
            lastMessage: 'Hi dude!'
        },
        {
            id: 4,
            avatar: user4,
            name: 'Alex',
            secondName: 'Terrible',
            lastMessage: 'you send'
        },
        {
            id: 5,
            avatar: user5,
            name: 'Phil',
            secondName: 'Bozeman',
            lastMessage: 'something there'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'HI, i have faced a problem with your software. are you available now',
            time: '21:40'
        },
        {
            id: 2,
            message: 'HI, i have checked about your query, there is no any problem like that.',
            time: '21:58'

        },
        {
            id: 3,
            message: 'thank you for your quick reply, i am sending you a screenshot',
            time: '22:12'
        },
        {
            id: 4,
            message: 'Yes, i have to see, please follow the below link.. https://www.abc.com',
            time: '22:35'
        },
        {
            id: 5,
            message: 'Dear You May again download the package directly',
            time: '23:50'
        }
    ],
    newMessageBody: ''
};

export const messagesReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newBody
            };
        }
        case SEND_MESSAGE: {
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {
                    id: 6,
                    message: body
                }]
            };
        }
        default:
            return state;
    }
};
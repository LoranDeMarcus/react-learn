import { SEND_MESSAGE } from './types';

import user1 from '../components/avatars/chatuser1.jpg';
import user2 from '../components/avatars/chatuser2.jpg';
import user3 from '../components/avatars/chatuser3.jpg';
import user4 from '../components/avatars/chatuser4.jpg';
import user5 from '../components/avatars/chatuser51.jpg';

type DialogType = {
    id: number,
    avatar: string,
    name: string
    secondName: string
    lastMessage: string
}

type MessagesType = {
    id: number,
    message: string
    time: string
}

const initialState = {
    dialogs: [
        {
            id: 1,
            avatar: user1,
            name: 'Andrew',
            secondName: 'Martin',
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
    ] as Array<DialogType>,
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
    ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState;

export const messagesReducer = (state = initialState, action: SendMessageCreatorActionType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return <InitialStateType>{
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: action.newMessageBody
                }]
            };
        }
        default:
            return state;
    }
};

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};

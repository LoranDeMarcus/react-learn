import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import { usersReducer } from './users-reducers';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

window.store = store;

export default store;
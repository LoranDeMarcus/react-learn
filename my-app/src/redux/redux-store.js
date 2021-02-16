import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import { usersReducer } from './users-reducers';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
window.state = store.getState();

export default store;
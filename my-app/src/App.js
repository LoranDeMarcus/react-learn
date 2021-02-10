import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './normalize.css';
import './App.css';

import Header from './components/Header/Header';
import FixedSidebar from './components/FixedSidebar/FixedSidebar';
import Newsfeed from './components/Newsfeed/Newsfeed';
import ProfileMain from './components/ProfileMain/ProfileMain';
import Dialogs from './components/Dialogs/Dialogs';
import UsersMain from './components/UsersMain/UsersMain';

import store from './redux/redux-store';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <FixedSidebar />
                <div className="content">
                    <Route path='/newsfeed' component={ Newsfeed } />
                    <Route path='/profile/:userId?' render={ () =>
                        <ProfileMain store={ store } />
                    } />
                    <Route path='/messages' render={ () =>
                        <Dialogs store={ store } />
                    }
                    />
                    <Route path='/friends' render={ () =>
                        <UsersMain />
                    }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
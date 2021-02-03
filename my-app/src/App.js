import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './normalize.css';
import './App.css';

import Header from './components/Header/Header';
import FixedSidebar from './components/FixedSidebar/FixedSidebar';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';

import store from './redux/redux-store';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <FixedSidebar />
                <Route path='/newsfeed' component={ Newsfeed } />
                <Route path='/profile' render={ () =>
                    <Main store={ store } />
                } />
                <Route path='/messages' render={ () =>
                    <Dialogs store={ store } />
                }
                />
                <Route path='/friends' component={ Friends } />
            </div>
        </BrowserRouter>
    );
};

export default App;
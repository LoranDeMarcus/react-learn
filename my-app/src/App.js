import React from 'react';
import { Route } from 'react-router-dom';

import './normalize.css';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import FixedSidebar from './components/FixedSidebar/FixedSidebar';
import Newsfeed from './components/Newsfeed/Newsfeed';
import ProfileMain from './components/ProfileMain/ProfileMain';
import Dialogs from './components/Dialogs/Dialogs';
import UsersMain from './components/UsersMain/UsersMain';
import Login from './components/Login/Login';

import store from './redux/redux-store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader />;

        return (
            <div className="App">
                <HeaderContainer />
                <FixedSidebar />
                <div className="content">
                    <Route path='/newsfeed' render={ () =>
                        <Newsfeed state={ store.getState() } />
                    } />
                    <Route path='/profile/:userId?' render={ () =>
                        <ProfileMain store={ store } />
                    } />
                    <Route path='/messages' render={ () =>
                        <Dialogs store={ store } />
                    } />
                    <Route path='/friends' render={ () =>
                        <UsersMain />
                    } />
                    <Route path='/login' render={ () =>
                        <Login />
                    } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

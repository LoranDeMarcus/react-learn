import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { Redirect, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

import './normalize.css';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import FixedSidebar from './components/FixedSidebar/FixedSidebar';
import Newsfeed from './components/Newsfeed/Newsfeed';
import ProfileMain from './components/ProfileMain/ProfileMain';

import Login from './components/Login/Login';

import store from './redux/redux-store';

// import Dialogs from './components/Dialogs/Dialogs';
// import UsersMain from './components/UsersMain/UsersMain';
const Dialogs = React.lazy(() => import ('./components/Dialogs/Dialogs'));
const UsersMain = React.lazy(() => import ('./components/UsersMain/UsersMain'));

class App extends React.Component {
    catchAllUnhandledErrors = () => {
        debugger;
        alert('Some error occured');
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) return <Preloader />;

        return (
            <div className="App">
                <HeaderContainer />
                <FixedSidebar />
                <div className="content">
                    <Switch>
                        <Redirect from="/" to="/profile" />
                    </Switch>

                    <Route path='/newsfeed'
                           render={ () => <Newsfeed /> } />

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileMain /> } />

                    <Suspense fallback={ <Preloader /> }>
                        <Route path='/messages'
                               render={ () => <Dialogs store={ store } /> } />

                        <Route path='/friends'
                               render={ () => <UsersMain /> } />
                    </Suspense>

                    <Route path='/login'
                           render={ () => <Login /> } />

                    <Route path='*'
                           render={ () => <div>404 NOT FOUND</div> } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SocialNetwork = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={ store }>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default SocialNetwork;

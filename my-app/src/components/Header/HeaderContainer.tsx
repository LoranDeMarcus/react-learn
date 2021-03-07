import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    render() {
        // @ts-ignore
        return <Header { ...this.props } />;
    }
}

const mapStateToProps = (state: { auth: { isAuth: any; login: any; logout: any; }; }) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    logout: state.auth.logout
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
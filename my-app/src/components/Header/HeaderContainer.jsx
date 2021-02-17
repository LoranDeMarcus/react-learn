import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMe, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header { ...this.props } />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    logout: state.auth.logout
});

export default connect(mapStateToProps, { authMe, logout })(HeaderContainer);
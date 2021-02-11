import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { usersAPI } from '../../API/API';

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authMeRequest().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data)
            }
        });
    }

    render() {
        return <Header { ...this.props } />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
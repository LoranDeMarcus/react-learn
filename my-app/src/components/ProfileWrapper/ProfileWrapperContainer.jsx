import React from 'react';
import { connect } from 'react-redux';
import ProfileWrapper from './ProfileWrapper';
import { setUserProfile, setUsersProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';

class ProfileWrapperContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 14825;
        this.props.setUsersProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />

        return (
            <ProfileWrapper { ...this.props } profile={ this.props.profile } />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

const withUrlDataContainerComponent = withRouter(ProfileWrapperContainer);

export default connect(mapStateToProps, { setUserProfile, setUsersProfile })(withUrlDataContainerComponent);
import React from 'react';
import { connect } from 'react-redux';
import ProfileWrapper from './ProfileWrapper';
import {
    getUsersProfile,
    getUserStatus,
    savePhoto, saveProfile,
    actions,
    updateUserStatus
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

class ProfileWrapperContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUsersProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <ProfileWrapper
                isOwner={ !this.props.match.params.userId }
                { ...this.props }
                profile={ this.props.profile }
                status={ this.props.status }
                updateUserStatus={ this.props.updateUserStatus }
                savePhoto={ this.props.savePhoto }
                saveProfile={ this.props.saveProfile }
            />
        );
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuthL: state.auth.isAuth
});

const { setUserProfile } = actions;

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUsersProfile,
        getUserStatus,
        updateUserStatus, savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileWrapperContainer);

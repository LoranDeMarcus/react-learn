import React from 'react';
import { connect } from 'react-redux';
import ProfileWrapper from './ProfileWrapper';
import { setUserProfile, getUsersProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileWrapperContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 14825;
        this.props.getUsersProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <ProfileWrapper
                { ...this.props }
                profile={ this.props.profile }
                status={ this.props.status }
                updateUserStatus={ this.props.updateUserStatus }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUsersProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter
    // withAuthRedirect
)(ProfileWrapperContainer);
import React from 'react';
import { connect } from 'react-redux';
import ProfileWrapper from './ProfileWrapper';
import { setUserProfile, setUsersProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileWrapperContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 14825;
        this.props.setUsersProfile(userId);
    }

    render() {
        return (
            <ProfileWrapper { ...this.props } profile={ this.props.profile } />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { setUserProfile, setUsersProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileWrapperContainer);
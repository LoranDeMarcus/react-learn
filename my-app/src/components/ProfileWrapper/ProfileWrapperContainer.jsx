import React from 'react';
import { connect } from 'react-redux';
import ProfileWrapper from './ProfileWrapper';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileWrapperContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <ProfileWrapper { ...this.props } profile={ this.props.profile } />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const withUrlDataContainerComponent = withRouter(ProfileWrapperContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);
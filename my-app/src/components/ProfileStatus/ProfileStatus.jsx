import React from 'react';

import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <>
                { !this.state.editMode ?
                    <span className={ styles.statusText } onClick={ () => this.toggleEditMode() }>
                        { this.props.status }
                    </span>
                    :
                    <input
                        className={ styles.input }
                        onChange={ this.onStatusChange }
                        autoFocus={ true }
                        onBlur={ () => this.toggleEditMode() }
                        value={ this.state.status } />
                }
            </>
        );
    }
}

export default ProfileStatus;

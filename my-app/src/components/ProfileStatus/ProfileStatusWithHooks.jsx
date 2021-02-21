import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const toggleEditMode = () => {
        setEditMode(value => !value)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            { !editMode &&
            <div>
                <span onClick={ () => {
                    toggleEditMode();
                }
                }>{ props.status || 'Change status' }</span>
            </div>
            }
            { editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    onBlur={ () => toggleEditMode() }
                    value={ status }
                    autoFocus={ true }/>
            </div>
            }
        </>
    );
};

export default ProfileStatusWithHooks;
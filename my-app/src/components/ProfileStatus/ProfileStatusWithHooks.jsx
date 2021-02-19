import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(value => !value)
        // props.updateUserStatus(this.state.status);
    }

    return (
        <>
            { !editMode &&
            <div>
                <span onClick={ () => {
                    toggleEditMode();
                }
                }>{ props.status || 'Изменить статус' }</span>
            </div>
            }
            { editMode &&
            <div>
                <input
                    onBlur={() => {
                        toggleEditMode();
                    }
                    }
                    autoFocus={ true }/>
            </div>
            }
        </>
    );
};

export default ProfileStatusWithHooks;
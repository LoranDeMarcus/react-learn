import React, { useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Block from '../common/Block/Block';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import ProfileInfoDataFormRedux from '../ProfileInfo/ProfileInfoDataForm';

import styles from './Sidebar.module.css';

const Sidebar = ({ status, updateUserStatus, profile, isOwner, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData);
    }

    return (
        <aside className={ styles.block }>
            <Block title='Status'>
                <ProfileStatusWithHooks
                    status={ status }
                    updateUserStatus={ updateUserStatus }
                />
            </Block>
            <Block title='Personal Info'>
                { editMode
                    ? <ProfileInfoDataFormRedux onSubmit={onSubmit} profile={ profile } isOwner={ isOwner } />
                    : <ProfileInfo profile={ profile } isOwner={ isOwner } toggleEditMode={ () => setEditMode(true) } /> }
            </Block>
        </aside>
    );
};

export default Sidebar;

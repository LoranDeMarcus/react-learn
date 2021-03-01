import React, { useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Block from '../common/Block/Block';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import ProfileInfoDataFormRedux from '../ProfileInfo/ProfileInfoDataForm';

import styles from './Sidebar.module.css';

const Sidebar = ({ status, updateUserStatus, profile, isOwner, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
        /* TODO: https://www.youtube.com/watch?v=-tDhjScH_0s&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=98 1:20:00 переделать редакс сабмит формы */
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
                    ? <ProfileInfoDataFormRedux
                        onSubmit={ onSubmit }
                        initialValues={ profile }
                        profile={ profile }
                        isOwner={ isOwner }
                    />
                    : <ProfileInfo
                        profile={ profile }
                        isOwner={ isOwner }
                        toggleEditMode={ () => setEditMode(true) }
                    />
                }
            </Block>
        </aside>
    );
};

export default Sidebar;

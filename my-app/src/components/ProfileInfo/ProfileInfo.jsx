import React from 'react';
import Contact from './Contact';

import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, isOwner, toggleEditMode }) => {
    return (
        <>
            { isOwner &&
            <button className={ styles.edit } onClick={toggleEditMode}>
                <i className="fas fa-pen" />
            </button>
            }
            <div>
                <span className={ styles.title }>
                    <i className="fa fa-briefcase" />
                    Looking for job?:
                </span>
                <p className={ styles.main }>
                    { profile.lookingForAJob ? 'yes' : 'no' }
                </p>
            </div>
            { profile.lookingForAJob &&
            <div>
                <span className={ styles.title }>
                    <i className="fa fa-briefcase" />
                    Looking for job description:
                </span>
                <p className={ styles.main }>
                    { profile.lookingForAJobDescription }
                </p>
            </div>
            }
            <div>
                <span className={ styles.title }>
                    <i className="fa fa-user" />
                    About Me:
                </span>
                <p className={ styles.main }>
                    { profile.aboutMe ? profile.aboutMe : 'empty' }
                </p>
            </div>
            <div>
                <span className={ styles.title }>
                    Contacts:
                </span>
                <div>
                    { Object.keys(profile.contacts).map(key => {
                        return <Contact key={ key } contactTitle={ key } contactValue={ profile.contacts[key] } />;
                    }) }
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;

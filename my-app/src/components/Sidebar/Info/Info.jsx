import React from 'react';
import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={ styles.info }>
            <span className={ styles.title }>
                <i className="fa fa-user"/>
                About Me:
            </span>
            <p className={ styles.main }>
                Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for the “dewwater” Agency in Ontario,
                Canada
            </p>
            <span className={ styles.title }>
                <i className="fa fa-birthday-cake"/>
                Birthday:
            </span>
            <p className={ styles.main }>
                December 17, 1985
            </p>
            <span className={ styles.title }>
                <i className="fa fa-phone"/>
                Phone Number:
            </span>
            <p className={ styles.main }>
                +1-989-232435234
            </p>

            <span className={ styles.title }>
                <i className="fa fa-medkit"/>
                Blood Group:
            </span>
            <p className={ styles.main }>
                B+
            </p>

            <span className={ styles.title }>
                <i className="fa fa-male"/>
                Gender:
            </span>
            <p className={ styles.main }>
                Male
            </p>

            <span className={ styles.title }>
                <i className="fas fa-globe-europe"/>
                Country:
            </span>
            <p className={ styles.main }>
                San Francisco, California, USA
            </p>
            <span className={ styles.title }>
                <i className="fa fa-briefcase"/>
                Occupation:
            </span>
            <p className={ styles.main }>
                UI/UX Designer
            </p>
            <span className={ styles.title }>
                <i className="fas fa-handshake"/>
                Joined:
            </span>
            <p className={ styles.main }>
                December 20, 2001
            </p>
        </div>
    );
};

export default Info;
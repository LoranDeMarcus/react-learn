import React from 'react';
import styles from './MetaInfo.module.css';

const MetaInfo = (props) => {
    return (
        <div className={ styles.block }>
            <div className={ styles.title }>
                { props.icon }
                { props.title }
            </div>
            <div className={ styles.content }>
                { props.content }
            </div>
        </div>
    );
};

export default MetaInfo;
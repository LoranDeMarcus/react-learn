import React from 'react';

import styles from './Block.module.css';

const Block = (props) => {
    return (
        <div className={ styles.block }>
            <div className={ styles.title }>
                { props.title }
            </div>
            <div>
                { props.children }
            </div>
        </div>
    );
};

export default Block;
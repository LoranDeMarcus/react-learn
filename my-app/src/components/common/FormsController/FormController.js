import React from 'react';

import styles from './FormController.module.css';

export const Element = Element => ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={ `${ styles.formsController } ${ isError ? styles.error : '' }` }>
            <Element className={ `${ props.className } ` } { ...input } { ...props } />
            { isError && <span>{ meta.error }</span> }
        </div>
    );
};
import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

import styles from './FormController.module.css';

type ElementType = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    text: string
}

type ElementControlType = (params: string) => React.ReactNode;

// @ts-ignore
export const Element: ElementControlType = (Element) => ({ input, meta, text, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={ `${ styles.formsController } ${ isError ? styles.error : '' }` }>
            <Element className={ `${ props.className } ` } { ...input } { ...props } />
            <span className={ props.textstyles }>{ text }</span>
            { isError && <span>{ meta.error }</span> }
        </div>
    );
};
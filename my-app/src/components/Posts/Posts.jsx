import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Element } from '../common/FormsController/FormController';

import styles from './Posts.module.css';

const maxLength10 = maxLengthCreator(10);
const Textarea = Element('textarea');

const Posts = (props) => {
    const messages = props.posts.map(item =>
        <Post message={ item.message } />
    ).reverse();

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={ styles.block }>
            <PostFormRedux onSubmit={ onAddPost } />
            { messages }
        </div>
    );
};

const PostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ styles.form }>
            <Field
                component={ Textarea }
                className={ styles.input }
                value={ props.newPostText }
                name={ 'newPostText' }
                placeholder={ 'Post message' }
                validate={ [requiredField, maxLength10] }
            />
            <button type={ 'submit' } className={ styles.button }>
                Send
            </button>
        </form>
    );
};

const PostFormRedux = reduxForm({ form: 'post' })(PostForm);

export default Posts;
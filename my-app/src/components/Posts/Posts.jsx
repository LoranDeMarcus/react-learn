import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

import styles from './Posts.module.css';

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
                component={ 'textarea' }
                className={ styles.input }
                value={ props.newPostText }
                name={ 'newPostText' }
            />
            <button type={ 'submit' } className={ styles.button }>
                Send
            </button>
        </form>
    );
};

const PostFormRedux = reduxForm({ form: 'post' })(PostForm);

export default Posts;
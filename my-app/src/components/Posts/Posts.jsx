import React from 'react';
import Post from './Post/Post';

import styles from './Posts.module.css';

const Posts = (props) => {
    const messages = props.posts.map(item =>
        <Post message={ item.message } />
    ).reverse();

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const newText = newPostElement.current.value.trim();
        props.updateNewPostText(newText);
    };

    return (
        <div className={ styles.block }>
            <form action="" className={ styles.form }>
                <textarea
                    onChange={ onPostChange }
                    ref={ newPostElement }
                    className={ styles.input }
                    value={ props.newPostText }
                />
                <button onClick={ onAddPost } type='button' className={ styles.button }>
                    Send
                </button>
            </form>
            { messages }
        </div>
    );
};

export default Posts;
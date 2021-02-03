import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../redux/action';
import Posts from './Posts';
import connect from 'react-redux/lib/connect/connect';

/*const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (reduxStore) => {
                    const state = reduxStore.getState();

                    const addPost = () => {
                        reduxStore.dispatch(addPostCreator());
                    };

                    const onPostChange = (newText) => {
                        reduxStore.dispatch(updateNewPostTextCreator(newText));
                    };

                    return <Posts
                        updateNewPostText={ onPostChange }
                        addPost={ addPost }
                        posts={ state.profilePage.posts }
                        newPostText={ state.profilePage.newPostText }
                    />;
                }
            }
        </StoreContext.Consumer>
    );
};*/

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextCreator(newText))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
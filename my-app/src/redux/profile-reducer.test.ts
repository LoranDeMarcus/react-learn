import { actions, profileReducer } from './profile-reducer';
import { PostsType, ProfileType } from "../Types/types";

const state = {
    posts: [
        {
            id: 1,
            message: 'my first post'
        },
        {
            id: 2,
            message: 'hello there'
        },
        {
            id: 3,
            message: 'general'
        },
        {
            id: 4,
            message: 'kenobi'
        },
        {
            id: 5,
            message: '+rep'
        }
    ] as Array<PostsType>,
    profile: null,
    status: '',
    newPostText: ''
};

it('posts length should be incremented', () => {
    const action = actions.addPostCreator('test text');
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
});

it('message of new post should be correct', () => {
    const action = actions.addPostCreator('test text');
    const newState = profileReducer(state, action);

    expect(newState.posts[5].message).toBe('test text');
});

it('posts length after deleting should be decremented', () => {
    const action = actions.deletePost(1);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it(`posts length after deleting shouldn't be decremented if postId incorrect`, () => {
    const action = actions.deletePost(1000);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

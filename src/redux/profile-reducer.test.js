import profileReducer from './profile-reducer.test';
import { render, screen } from '@testing-library/react';
import { addPostActionCreator } from './profile-reducer';

test('length of posts should be incremented', () => {
  let action = addPostActionCreator('klkl');
  let state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', like: 4 },
      { id: 2, message: "It's my first post", like: 6 },
    ],
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

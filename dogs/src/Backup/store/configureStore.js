import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import photoPost from './photoPost';
import photo from './photo';
import user from './token';
import token from './token';
import feed from './feed';
import ui from './ui';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, photoPost, token, user, feed, ui });
const store = configureStore({ reducer, middleware });

export default store;

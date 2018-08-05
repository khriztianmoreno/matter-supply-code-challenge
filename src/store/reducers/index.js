import { combineReducers } from 'redux';

import user from './user';
import gist from './gist';

export default combineReducers({
  user,
  posts: gist
});

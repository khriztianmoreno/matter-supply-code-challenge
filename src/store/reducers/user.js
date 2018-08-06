/**
 * State User
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { handleActions } from 'redux-actions';

import {
  SET_USERNAME,
  CLEAR_PROFILE,
  FETCH_USER_PROFILE
} from '../types/user';

const initialState = {
  profile: {},
  token: null,
  username: 'khriztianmoreno'
};

const reducer = handleActions({
  [FETCH_USER_PROFILE]: {
    next: (state, action) => (
      {
        ...state,
        profile: action.payload,
        username: action.payload.login,
      }
    ),
    throw: (state, action) => (
      {
        ...state,
        message: action.payload.message
      }
    )
  },
  [CLEAR_PROFILE]: state => (
    {
      ...state,
      profile: {}
    }
  ),
  [SET_USERNAME]: (state, action) => (
    {
      ...state,
      username: action.payload
    }
  )
}, initialState);

export default reducer;

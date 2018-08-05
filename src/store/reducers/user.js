/**
 * State User
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import {
  SET_USERNAME,
  CLEAR_PROFILE,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL
} from '../types/user';

const initialState = {
  profile: {},
  token: null,
  username: 'khriztianmoreno',
  error: false,
  fetch: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload
      };
    }
    case CLEAR_PROFILE: {
      return {
        ...state,
        profile: {}
      };
    }
    case FETCH_USER_PROFILE: {
      return {
        ...state,
        fetch: true
      };
    }
    case FETCH_USER_PROFILE_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
        username: action.payload.login,
        fetch: false,
        error: false
      };
    }
    case FETCH_USER_PROFILE_FAIL: {
      return {
        ...state,
        fetch: false,
        error: true
      };
    }
    default:
      return state;
  }
};

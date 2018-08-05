/**
 * specific State of the gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import {
  FETCH_ALL_GIST,
  FETCH_ALL_GIST_SUCCESS,
  FETCH_ALL_GIST_FAIL
} from '../types/gist';

const initialState = {
  gists: [],
  gist: null,
  comments: [],
  username: null,
  error: false,
  fetch: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_GIST: {
      return {
        ...state,
        fetch: true
      };
    }
    case FETCH_ALL_GIST_SUCCESS: {
      return {
        ...state,
        gists: action.payload,
        fetch: false,
        error: false
      };
    }
    case FETCH_ALL_GIST_FAIL: {
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

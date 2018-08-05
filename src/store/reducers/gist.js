/**
 * specific State of the gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import {
  SET_USERNAME,
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_ALL_COMMENTS_FAIL,
  FETCH_ALL_GIST,
  FETCH_ALL_GIST_SUCCESS,
  FETCH_ALL_GIST_FAIL,
  FETCH_SPECIFIC_GIST,
  FETCH_SPECIFIC_GIST_SUCCESS,
  FETCH_SPECIFIC_GIST_FAIL
} from '../types/gist';

const initialState = {
  gists: [],
  gist: null,
  comments: [],
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
    case FETCH_ALL_COMMENTS: {
      return {
        ...state,
        fetch: true
      };
    }
    case FETCH_ALL_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: action.payload,
        fetch: false,
        error: false
      };
    }
    case FETCH_ALL_COMMENTS_FAIL: {
      return {
        ...state,
        fetch: false,
        error: true
      };
    }
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
    case FETCH_SPECIFIC_GIST: {
      return {
        ...state,
        fetch: true
      };
    }
    case FETCH_SPECIFIC_GIST_SUCCESS: {
      return {
        ...state,
        gist: action.payload,
        fetch: false,
        error: false
      };
    }
    case FETCH_SPECIFIC_GIST_FAIL: {
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

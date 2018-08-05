/**
 * specific State of the gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { handleAction, combineActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import {
  SHOW_LOADER,
  HIDE_LOADER,
  FETCH_ALL_GIST,
  FETCH_SPECIFIC_GIST,
  FETCH_ALL_COMMENTS
} from '../types/gist';

const initialState = {
  gists: [],
  gist: null,
  comments: [],
  error: false,
  fetch: false
};

const getAllGistsReducer = handleAction(
  FETCH_ALL_GIST,
  (state, action) => (
    {
      ...state,
      gists: action.payload,
      gist: null
    }
  ),
  initialState
);

const getGistReducer = handleAction(
  FETCH_SPECIFIC_GIST,
  (state, action) => (
    {
      ...state,
      gist: action.payload,
    }
  ),
  initialState
);

const getCommentsByGistReducer = handleAction(
  FETCH_ALL_COMMENTS,
  (state, action) => (
    {
      ...state,
      comments: action.payload,
    }
  ),
  initialState
);

const loaderReducer = handleAction(
  combineActions(SHOW_LOADER, HIDE_LOADER),
  (state, action) => (
    { ...state, isLoading: action.payload }
  ),
  initialState
);

export default reduceReducers(
  getAllGistsReducer,
  getGistReducer,
  getCommentsByGistReducer,
  loaderReducer
);

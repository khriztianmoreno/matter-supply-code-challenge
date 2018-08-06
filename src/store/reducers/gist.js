/**
 * specific State of the gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { handleActions, combineActions } from 'redux-actions';

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
  comments: []
};

const reducer = handleActions({
  [FETCH_ALL_GIST]: {
    next: (state, action) => (
      {
        ...state,
        gists: action.payload,
        gist: null
      }
    ),
    throw: (state, action) => (
      {
        ...state,
        message: action.payload.message
      }
    )
  },
  [FETCH_SPECIFIC_GIST]: (state, action) => (
    {
      ...state,
      gist: action.payload,
    }
  ),
  [FETCH_ALL_COMMENTS]: (state, action) => (
    {
      ...state,
      comments: action.payload,
    }
  ),
  [combineActions(SHOW_LOADER, HIDE_LOADER)]: (state, action) => (
    { ...state, isLoading: action.payload }
  )
}, initialState);

export default reducer;

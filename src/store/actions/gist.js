/**
 * Specific Actions for Gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { createAction } from 'redux-actions';

import {
  SHOW_LOADER,
  HIDE_LOADER,
  FETCH_ALL_GIST,
  FETCH_SPECIFIC_GIST,
  FETCH_ALL_COMMENTS
} from '../types/gist';

import { getAllGist, getGist, getCommentsByGist } from '../../utils/gistService';

export const loadGists = createAction(FETCH_ALL_GIST);
export const loadSimpleGist = createAction(FETCH_SPECIFIC_GIST);
export const loadCommentsByGist = createAction(FETCH_ALL_COMMENTS);
export const showLoader = createAction(SHOW_LOADER, () => true);
export const hideLoader = createAction(HIDE_LOADER, () => false);

/**
 * @description Get all the public gist of a given user
 * @param {String} user Values to get the gist
 */
export const fetchAll = user => (dispatch, getState) => {
  const userName = user || getState().user.username;
  dispatch(showLoader());

  getAllGist(userName).then(({ data }) => {
    dispatch(loadGists(data));
    dispatch(hideLoader());
  });
};


/**
 * @description Gets a specific gist
 * @param {String} id Unique identifier of the public gist
 */
export const fetchSimple = id => (dispatch) => {
  dispatch(showLoader());

  getGist(id).then(({ data }) => {
    dispatch(loadSimpleGist(data));
    dispatch(hideLoader());
  });
};

/**
 * @description Get the comments of a specifi post
 * @param {String} id Unique identifier of the public gist
 */
export const fetchCommentsByPost = id => (dispatch) => {
  dispatch(showLoader());

  getCommentsByGist(id).then(({ data }) => {
    dispatch(loadCommentsByGist(data));
    dispatch(hideLoader());
  });
};

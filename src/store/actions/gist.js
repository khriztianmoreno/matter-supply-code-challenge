/**
 * Specific Actions for Gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import axios from 'axios';

import {
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_ALL_COMMENTS_FAIL,
  FETCH_ALL_GIST,
  FETCH_ALL_GIST_SUCCESS,
  FETCH_ALL_GIST_FAIL,
  FETCH_SPECIFIC_GIST,
  FETCH_SPECIFIC_GIST_SUCCESS,
  FETCH_SPECIFIC_GIST_FAIL,
  SET_USERNAME
} from '../types/gist';

const API_PATH_BASE = 'https://api.github.com';

/**
 * @description Get all the public gist of a given user
 * @param {String} userName Values to get the gist
 */
export function fetchAll(user) {
  return (dispatch, getState) => {
    const userDefault = getState().posts.username;

    dispatch({ type: FETCH_ALL_GIST });

    return axios.get(`${API_PATH_BASE}/users/${user || userDefault}/gists`)
      .then(({ data, status }) => {
        dispatch({ type: FETCH_ALL_GIST_SUCCESS, payload: data });

        return status;
      })
      .catch(({ response }) => {
        dispatch({ type: FETCH_ALL_GIST_FAIL, payload: response });

        return response;
      });
  };
}

/**
 * @description Gets a specific gist
 * @param {String} id Unique identifier of the public gist
 */
export function fetchSimple(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_SPECIFIC_GIST });

    return axios.get(`${API_PATH_BASE}/gists/${id}`)
      .then(({ data, status }) => {
        dispatch({ type: FETCH_SPECIFIC_GIST_SUCCESS, payload: data });

        return status;
      })
      .catch(({ response }) => {
        dispatch({ type: FETCH_SPECIFIC_GIST_FAIL, payload: response });

        return response;
      });
  };
}

/**
 * @description Get the comments of a specifi post
 * @param {String} id Unique identifier of the public gist
 */
export function fetchCommentsByPost(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_ALL_COMMENTS });

    return axios.get(`${API_PATH_BASE}/gists/${id}/comments`)
      .then(({ data, status }) => {
        dispatch({ type: FETCH_ALL_COMMENTS_SUCCESS, payload: data });

        return status;
      })
      .catch(({ response }) => {
        dispatch({ type: FETCH_ALL_COMMENTS_FAIL, payload: response });

        return response;
      });
  };
}

/**
 * @description Set the user's name
 * @param {String} name Value for set
 */
export function setUserName(name) {
  return {
    type: SET_USERNAME,
    payload: name
  };
}

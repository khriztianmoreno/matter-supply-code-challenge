/**
 * Specific Actions for Gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import axios from 'axios';

import {
  FETCH_ALL_GIST,
  FETCH_ALL_GIST_SUCCESS,
  FETCH_ALL_GIST_FAIL
} from '../types/gist';

const API_PATH_BASE = 'https://api.github.com';
const USER_NAME_DEFAULT = 'khriztianmoreno';

export function fetchAll(userName = USER_NAME_DEFAULT) {
  return (dispatch) => {
    dispatch({ type: FETCH_ALL_GIST });

    return axios.get(`${API_PATH_BASE}/users/${userName}/gists`)
      .then(({ data, status }) => {
        dispatch({ type: FETCH_ALL_GIST_SUCCESS, payload: data });

        return status;
      })
      .catch(({ response }) => {
        dispatch({ type: FETCH_ALL_GIST_FAIL, response });

        return response;
      });
  };
}

export function fetchSimple() {
  return dispatch => dispatch;
}

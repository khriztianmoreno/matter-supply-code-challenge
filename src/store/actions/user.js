/**
 * Specific Actions for Gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import axios from 'axios';

import {
  SET_USERNAME,
  CLEAR_PROFILE,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL
} from '../types/user';

const API_PATH_BASE = 'https://api.github.com';

/**
 * @description Get the public profile of a specific user
 * @param {String} user Values to get the profile
 */
export function fetchProfile(user) {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE });

    return axios.get(`${API_PATH_BASE}/users/${user}`)
      .then(({ data, status }) => {
        dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: data });

        return status;
      })
      .catch(({ response }) => {
        dispatch({ type: FETCH_USER_PROFILE_FAIL, payload: response });

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

export function clearProfile() {
  return {
    type: CLEAR_PROFILE
  };
}

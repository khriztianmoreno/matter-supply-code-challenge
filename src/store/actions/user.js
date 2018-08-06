/**
 * Specific Actions for Gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { createAction } from 'redux-actions';

import {
  SET_USERNAME,
  CLEAR_PROFILE,
  FETCH_USER_PROFILE
} from '../types/user';

import { getUserInfo } from '../../utils/userService';

export const loadUser = createAction(FETCH_USER_PROFILE);
export const setUserName = createAction(SET_USERNAME);
export const clearProfile = createAction(CLEAR_PROFILE);


/**
 * @description Get the public profile of a specific user
 * @param {String} user Values to get the profile
 */
export const fetchProfile = user => (dispatch) => {
  getUserInfo(user)
    .then(({ data }) => {
      dispatch(loadUser(data));
    })
    .catch((error) => {
      dispatch(loadUser(error));
    });
};

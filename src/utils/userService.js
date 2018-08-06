/**
 * Specific Actions for User
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import axios from 'axios';

const API_PATH_BASE = process.env.REACT_APP_BASE_URL || 'https://api.github.com';

/**
 * @description Request to get info the user
 * @param {String} user Value to search
 */
export const getUserInfo = user => (
  axios.get(`${API_PATH_BASE}/users/${user}`)
);

/**
 * @description Request to get all users
 */
export const getAllUsers = () => (
  axios.get(`${API_PATH_BASE}/users`)
);

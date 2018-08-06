/**
 * Specific Actions for Gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import axios from 'axios';

const API_PATH_BASE = process.env.REACT_APP_BASE_URL || 'https://api.github.com';

/**
 * @description Request to get all the gist of a user
 * @param {String} user Value to search
 */
export const getAllGist = user => (
  axios.get(`${API_PATH_BASE}/users/${user}/gists`)
);

/**
 * @description Request to get a specific gist of a user
 * @param {string} id Value to search
 */
export const getGist = id => (
  axios.get(`${API_PATH_BASE}/gists/${id}`)
);

/**
 * @description Request to get all the comments of a gist
 * @param {String} id Value to search
 */
export const getCommentsByGist = id => (
  axios.get(`${API_PATH_BASE}/gists/${id}/comments`)
);

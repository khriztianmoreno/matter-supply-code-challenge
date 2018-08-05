/**
 * SmartComponent for Specific gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { connect } from 'react-redux';

import { fetchSimple, fetchCommentsByPost } from '../../store/actions/gist';
import { fetchProfile, clearProfile } from '../../store/actions/user';

import GistPage from './Gist';

/**
 * @description simple object, which will be combined in the props of the component
 * @param {*} state The store state.
 */
const mapStateToProps = state => ({
  gist: state.posts.gist,
  comments: state.posts.comments,
  profile: state.user.profile
});

const mapDispatchToProps = {
  fetchSimple,
  fetchComments: fetchCommentsByPost,
  fetchProfile,
  clearProfile
};

const GistContainer = connect(mapStateToProps, mapDispatchToProps)(GistPage);
export default GistContainer;

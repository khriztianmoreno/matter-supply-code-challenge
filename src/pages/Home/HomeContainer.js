/**
 * SmartComponent for all gists
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { connect } from 'react-redux';


import { fetchAll } from '../../store/actions/gist';
import { setUserName } from '../../store/actions/user';

import HomePage from './Home';

/**
 * @description simple object, which will be combined in the props of the component
 * @param {*} state The store state.
 */
const mapStateToProps = state => ({
  gists: state.posts.gists
});

const mapDispatchToProps = {
  fetchAll,
  setUserName
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomeContainer;

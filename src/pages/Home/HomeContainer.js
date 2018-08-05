/**
 * SmartComponent for employees
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { connect } from 'react-redux';

import { fetchAll } from '../../store/actions/gist';

import HomePage from './Home';

/**
 * @description simple object, which will be combined in the props of the component
 * @param {*} state The store state.
 */
const mapStateToProps = state => ({
  gists: state.gists
});

const mapDispatchToProps = {
  fetchAll,
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomeContainer;

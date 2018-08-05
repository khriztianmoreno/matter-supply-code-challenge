/**
 * SmartComponent for Specific gist
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { connect } from 'react-redux';

import { fetchSimple } from '../../store/actions/gist';

import GistPage from './Gist';

/**
 * @description simple object, which will be combined in the props of the component
 * @param {*} state The store state.
 */
const mapStateToProps = state => ({
  gist: state.gist
});

const mapDispatchToProps = {
  fetchSimple,
};

const GistContainer = connect(mapStateToProps, mapDispatchToProps)(GistPage);
export default GistContainer;

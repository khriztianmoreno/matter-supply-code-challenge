import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Loader = ({ isLoading }) => (
  <p className="d-flex justify-content-center">
    {isLoading && <img src="/img/loading.gif" alt="loading content" />}
  </p>
);

Loader.defaultProps = {
  isLoading: false
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default connect(state => ({ isLoading: state.posts.isLoading }))(Loader);

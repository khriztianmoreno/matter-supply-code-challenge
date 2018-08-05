import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Loader = ({ isLoading }) => (
  <span className="loader">
    {isLoading ? <img src="/img/loading.gif" alt="loading content" /> : null}
  </span>
);

Loader.defaultProps = {
  isLoading: false
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default connect(({ isLoading }) => ({ isLoading }))(Loader);

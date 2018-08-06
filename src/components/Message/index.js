import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Message = ({ message }) => (
  message
    ? (
      <p className="message">
        {message}
      </p>
    )
    : null
);

Message.defaultProps = {
  message: null
};

Message.propTypes = {
  message: PropTypes.string,
};

export default connect(state => ({ message: state.posts.message }))(Message);

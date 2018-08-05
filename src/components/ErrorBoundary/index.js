/**
 * @description More info: https://reactjs.org/docs/error-boundaries.html
 * @author Cristian Moreno
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const sendToErrorReporting = (error, info) => {
  console.log(error);
  console.log(info);
};

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    sendToErrorReporting(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.
        </h1>
      );
    }
    return children;
  }
};

ErrorBoundary.getDefaultProps = {
  children: null
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

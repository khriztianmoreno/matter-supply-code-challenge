/**
 * SmartComponent for employees
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomePage extends Component {
  componentDidMount() {
    const { fetchAll } = this.props;

    fetchAll();
  }

  render() {
    return (
      <React.Fragment>
        hola
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
};

export default HomePage;

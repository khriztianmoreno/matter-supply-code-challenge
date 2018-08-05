/**
 * SmartComponent for employees
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GistArticle from '../../components/GistArticle';

import './Home.css';

class HomePage extends Component {
  componentDidMount() {
    const { fetchAll } = this.props;

    fetchAll();
  }

  render() {
    const { gists } = this.props;
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="blog-posts">
            {
              gists && gists.map(item => <GistArticle gist={item} key={item.id} />)
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  gists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    comments_url: PropTypes.string,
    owner: PropTypes.shape({
      html_url: PropTypes.string
    })
  })).isRequired
};

export default HomePage;

/**
 * SmartComponent for employees
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GistArticleDetail from '../../components/GistArticleDetail';

// import './Gist.css';

class GistPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { fetchSimple, match } = this.props;

    fetchSimple(match.params.id);
  }

  static getDerivedStateFromProps(props) {
    const { gist } = props;

    if (gist && gist.files) {
      const key = Object.keys(gist.files).shift();
      const { content } = gist.files[key];

      return { content };
    }

    return null;
  }

  render() {
    const { gist } = this.props;
    const { content } = this.state;

    return (
      <React.Fragment>
        { gist && content && <GistArticleDetail gist={gist} content={content} /> }
      </React.Fragment>
    );
  }
}

GistPage.defaultProps = {
  gist: {}
};

GistPage.propTypes = {
  fetchSimple: PropTypes.func.isRequired,
  gist: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    comments_url: PropTypes.string,
    owner: PropTypes.shape({
      html_url: PropTypes.string
    })
  }),
  match: PropTypes.shape().isRequired
};

export default GistPage;

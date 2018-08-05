/**
 * SmartComponent for employees
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import ErrorBoundary from '../../components/ErrorBoundary';
import GistArticleDetail from '../../components/GistArticleDetail';

class GistPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { fetchSimple, fetchComments, match } = this.props;

    fetchSimple(match.params.id);
    fetchComments(match.params.id);
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
    const { gist, comments } = this.props;
    const { content } = this.state;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <ErrorBoundary>
              {
                gist && content
                && <GistArticleDetail gist={gist} content={content} comments={comments} />
              }
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
    );
  }
}

GistPage.defaultProps = {
  gist: {},
  comments: []
};

GistPage.propTypes = {
  fetchSimple: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  gist: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    comments_url: PropTypes.string,
    owner: PropTypes.shape({
      html_url: PropTypes.string
    })
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    })
  })),
  match: PropTypes.shape().isRequired
};

export default GistPage;

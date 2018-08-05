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
    const {
      fetchSimple,
      fetchComments,
      match
    } = this.props;

    fetchSimple(match.params.id);
    fetchComments(match.params.id);
  }

  componentWillUnmount() {
    const { clearProfile } = this.props;
    clearProfile();
  }

  static getDerivedStateFromProps(props, state) {
    const { gist, fetchProfile, profile } = props;

    if (gist && gist.files) {
      const key = Object.keys(gist.files).shift();
      const { content } = gist.files[key];

      if (!state.profile) {
        fetchProfile(gist.owner.login);
      }

      return { content, profile };
    }


    return null;
  }

  render() {
    const { gist, comments, profile } = this.props;
    const { content } = this.state;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <ErrorBoundary>
              {
                gist && content && (
                  <GistArticleDetail
                    gist={gist}
                    content={content}
                    author={profile}
                    comments={comments}
                  />
                )
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
  profile: {},
  comments: []
};

GistPage.propTypes = {
  fetchSimple: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
  gist: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    comments_url: PropTypes.string,
    owner: PropTypes.shape({
      html_url: PropTypes.string
    })
  }),
  profile: PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
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

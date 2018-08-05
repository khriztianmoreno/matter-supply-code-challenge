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
      <Container>
        <Row>
          <Col md={12}>
            <ErrorBoundary>
              { gist && content && <GistArticleDetail gist={gist} content={content} /> }
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
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

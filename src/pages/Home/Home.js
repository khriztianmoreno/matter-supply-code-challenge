/**
 * SmartComponent for employees
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import ErrorBoundary from '../../components/ErrorBoundary';
import GistArticle from '../../components/GistArticle';
import Search from '../../components/Search';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

class HomePage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { fetchAll } = this.props;

    fetchAll();
  }

  handleSearch(value) {
    const { fetchAll, setUserName } = this.props;

    setUserName(value);
    fetchAll(value);
  }

  render() {
    const { gists } = this.props;
    return (
      <React.Fragment>
        <Search searchGists={this.handleSearch} />
        <Container>
          <Row className="main-container">
            <Col md={12} className="blog-posts">
              <Loader />
              <Message />
              <ErrorBoundary>
                {
                  gists && gists.length > 0
                    ? gists.map(item => <GistArticle gist={item} key={item.id} />)
                    : (
                      <span>
                        The user does not contain data
                      </span>
                    )
                }
              </ErrorBoundary>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
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

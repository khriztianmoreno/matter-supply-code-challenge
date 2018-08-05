import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import './Search.css';

const Search = () => (
  <Container className="mb-4">
    <Row>
      <Col md={12}>
        <form name="searchForm" className="search-form">
          <div className="input-group input-group-lg">
            <input name="search" className="form-control" placeholder="Search..." type="text" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary btn-lg">
                <span role="img" aria-label="Emoji">
                🔍
                </span>
              </button>
            </span>
          </div>
        </form>
        <hr className="taller" />
      </Col>
    </Row>
  </Container>
);

export default Search;

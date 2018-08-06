import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Header = () => (
  <header className="page-header">
    <Container>
      <Row>
        <Col md={12}>
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>
            <span role="img" aria-label="Emoji">
            ⚡️&nbsp;
            </span>
            Welcome to Gixt Blog
            <span role="img" aria-label="Emoji">
              &nbsp;⚡️
            </span>
          </h2>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;

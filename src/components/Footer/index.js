import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
  <footer id="footer" className="footer-copyright">
    <Container>
      <Row>
        <Col md={12}>
          <p>
            <a href="http://twitter.com/khriztianmoreno">
              @khriztianmoreno &nbsp;
            </a>
            © Copyright 2018. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import './Author.css';

const Author = ({ author }) => (
  <div className="post-block post-author clearfix">
    <h3 className="heading-primary">
      <span role="img" aria-label="Emoji">
        👨🏼‍💻 Author
      </span>
    </h3>
    <Row>
      <Col md={10}>
        <p>
          <strong className="name">
            <a href={author.html_url} target="_blank" rel="noopener noreferrer">
              { author.name }
            </a>
          </strong>
        </p>
        <p>
          { author.bio }
        </p>
      </Col>
      <Col md={2}>
        <div className="img-thumbnail">
          <a href={author.html_url} target="_blank" rel="noopener noreferrer">
            <img src={author.avatar_url} alt="avatar" />
          </a>
        </div>
      </Col>
    </Row>
  </div>
);

Author.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default Author;

import React from 'react';
import PropTypes from 'prop-types';

import './Author.css';

const Author = ({ author }) => (
  <div className="post-block post-author clearfix">
    <h3 className="heading-primary">
      <span role="img" aria-label="Emoji">
        👨🏼‍💻 Author
      </span>
    </h3>
    <div className="img-thumbnail">
      <a href={author.html_url} target="_blank" rel="noopener noreferrer">
        <img src={author.avatar_url} alt="avatar" />
      </a>
    </div>
    <p>
      <strong className="name">
        <a href={author.html_url} target="_blank" rel="noopener noreferrer">
          { author.login }
        </a>
      </strong>
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
      pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec
      metus. Mauris ultricies, justo eu convallis placerat,
      felis enim ornare nisi, vitae mattis nulla ante id dui.
    </p>
  </div>
);

Author.propTypes = {
  author: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default Author;

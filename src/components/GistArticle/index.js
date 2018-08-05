import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import formatDate from '../../utils/date';

import './GistArticle.css';

const GistArticle = ({ gist }) => (
  <article className="post post-large">
    <div v-if="gist">
      <div className="post-date">
        <span className="day">
          { formatDate(gist.created_at, 'D') }
        </span>
        <span className="month">
          { formatDate(gist.created_at, 'MMM') }
        </span>
      </div>
      <div className="post-content">
        <h2>
          <Link to={`/post/${gist.id}`}>
            {gist.description}
          </Link>
        </h2>
        <p>
          <span role="img" aria-label="Emoji">
            📄
          </span>
          {gist.description}
        </p>
        <div className="post-meta">
          <span role="img" aria-label="Emoji">
            By&nbsp;👨🏼‍💻&nbsp;
            <a href={gist.owner.html_url} target="_blank" rel="noopener noreferrer">
              { gist.owner.login }
            </a>
          </span>
          <span>
            <i className="fa fa-comments" />
            <a href={gist.comments_url} target="_blank" rel="noopener noreferrer" className="post-meta-link">
              { gist.comments }
              &nbsp;comments
            </a>
          </span>
          <Link to={`/post/${gist.id}`} className="btn btn-xs btn-primary pull-right">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  </article>
);

GistArticle.propTypes = {
  gist: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    comments_url: PropTypes.string,
    owner: PropTypes.shape({
      html_url: PropTypes.string
    })
  }).isRequired,
};


export default GistArticle;

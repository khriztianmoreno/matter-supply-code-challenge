import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './GistArticle.css';

const GistArticle = ({ gist }) => (
  <article className="post post-large">
    <div v-if="gist">
      <div className="post-date">
        <span className="day">
          { gist.created_at }
        </span>
        <span className="month">
          { gist.created_at }
        </span>
      </div>
      <div className="post-content">
        <h2>
          <Link to={`/post/${gist.id}`}>
            {gist.description}
          </Link>
        </h2>
        <p>
          {gist.description}
        </p>
        <div className="post-meta">
          <span>
            <i className="fa fa-user" />
            By
            <a href={gist.owner.html_url} target="_blank" rel="noopener noreferrer">
              { gist.owner.login }
            </a>
          </span>
          <span>
            <i className="fa fa-comments" />
            <a href={gist.comments_url} target="_blank" rel="noopener noreferrer" className="post-meta-link">
              { gist.comments }
              comments
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

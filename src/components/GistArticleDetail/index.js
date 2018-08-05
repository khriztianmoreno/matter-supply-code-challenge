import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import PostDate from '../PostDate';
import Author from '../Author';
import Comments from '../Comments';

import './GistArticleDetail.css';

const GistArticleDetail = ({ gist, content, comments }) => (
  <div className="post blog-single-post">
    <article className="post post-large blog-single-post">
      <PostDate value={gist.created_at} />
      <div className="post-content">
        <h2>
          { gist.description }
        </h2>
        <ReactMarkdown source={content} />
        <div className="post-meta">
          <span role="img" aria-label="Emoji">
            Author&nbsp;
            <a href={gist.owner.html_url} target="_blank" rel="noopener noreferrer">
              { gist.owner.login }
            </a>
          </span>
          <span role="img" aria-label="Emoji">
            💬
            <a href={gist.comments_url} target="_blank" rel="noopener noreferrer">
              { gist.comments }
              &nbsp;Comments
            </a>
          </span>
        </div>
        <Author author={gist.owner} />
        <Comments comments={comments} />
      </div>
    </article>
  </div>
);

GistArticleDetail.defaultProps = {
  comments: []
};


GistArticleDetail.propTypes = {
  gist: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    comments_url: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      html_url: PropTypes.string.isRequired
    })
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    })
  })),
  content: PropTypes.string.isRequired
};

export default GistArticleDetail;

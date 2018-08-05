import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import PostDate from '../PostDate';

import './GistArticleDetail.css';

const GistArticleDetail = ({ gist, content }) => (
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
            👨🏼‍💻 Author
            <a href={gist.owner.html_url} target="_blank" rel="noopener noreferrer">
              { gist.owner.login }
            </a>
          </span>
          <span role="img" aria-label="Emoji">
            💬
            <a href={gist.comments_url} target="_blank" rel="noopener noreferrer">
              { gist.comments }
              Comments
            </a>
          </span>
        </div>


      </div>
    </article>
  </div>
);

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
  content: PropTypes.string.isRequired
};

export default GistArticleDetail;

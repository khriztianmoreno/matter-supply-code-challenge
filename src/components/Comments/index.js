import React from 'react';
import PropTypes from 'prop-types';

import formatDate from '../../utils/date';

import './Comments.css';

const Comments = ({ comments }) => (
  <div className="post-block post-comments clearfix">
    <h3 className="heading-primary">
      <span role="img" aria-label="Emoji">
        💬 Comments
      </span>
      (
      { comments.length }
      )
    </h3>
    <ul className="comments">
      {
        comments && comments.map(comment => (
          <li key={comment.id}>
            <div className="comment">
              <div className="img-thumbnail">
                <img className="avatar" alt="Avatar" src={comment.user.avatar_url} />
              </div>
              <div className="comment-block">
                <div className="comment-arrow" />
                <span className="comment-by">
                  <strong>
                    <a href={comment.user.html_url} target="_blank" rel="noopener noreferrer">
                      { comment.user.login }
                    </a>
                  </strong>
                </span>
                <p>
                  { comment.body }
                </p>
                <span className="date pull-right">
                  { formatDate(comment.created_at, 'MMM M, YYYY') }
                </span>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  </div>
);

Comments.defaultProps = {
  comments: []
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    })
  }))
};

export default Comments;

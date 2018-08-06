import React from 'react';
import PropTypes from 'prop-types';

import formatDate from '../../utils/date';

const PostDate = ({ value }) => (
  <div className="post-date">
    <span className="day">
      { formatDate(value, 'D') }
    </span>
    <span className="month">
      { formatDate(value, 'MMM') }
    </span>
  </div>
);

PostDate.propTypes = {
  value: PropTypes.string.isRequired,
};

export default PostDate;

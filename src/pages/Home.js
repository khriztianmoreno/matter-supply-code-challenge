import React from 'react';

import GistArticle from '../components/GistArticle';

const GIST = {
  id: '1212',
  created_at: '5 jun',
  description: 'Create simple config for React project',
  comments_url: 'http://google.com',
  owner: {
    html_url: 'http://google.com'
  }
};

const HomePage = () => (
  <React.Fragment>
    <GistArticle gist={GIST} />
  </React.Fragment>
);

export default HomePage;

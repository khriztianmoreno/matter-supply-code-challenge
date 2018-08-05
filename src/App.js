import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Gist from './pages/Gist';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/:id"
          component={Gist}
        />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);


export default App;

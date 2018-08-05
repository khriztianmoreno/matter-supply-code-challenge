import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reducer from './store/reducers/gist';


const store = createStore(reducer,
  process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk)));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

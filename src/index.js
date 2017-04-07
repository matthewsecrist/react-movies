import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

// React Router
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Store
import store from './store';

// Pages
import Home from './containers/Home/';
import Movie from './containers/Movie/';

// Create the history for react-router-redux
const history = syncHistoryWithStore(browserHistory, store)

// Render it.
ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" exactly component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/movie/:movieId" component={Movie} />
      </Router>
  </Provider>,
  document.getElementById('root')
)

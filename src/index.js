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
import Movies from './containers/Movies/';
import Movie from './containers/Movie/';

// css
import '../semantic/dist/semantic.min.css';

// Create the history for react-router-redux
const history = syncHistoryWithStore(browserHistory, store)

// Render it.
ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" exactly component={Movies} />
        <Route path="/movies" exactly component={Movies} />
        <Route path="/movies/:moviesType" component={Movies} />
        <Route path="/movie/:movieId" component={Movie} />
      </Router>
  </Provider>,
  document.getElementById('root')
)

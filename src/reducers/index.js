import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import popularMovies from './popularMovies';
import movieDetails from './movieDetails';

const reducers = combineReducers({
  routing: routerReducer,
  popularMovies,
  movieDetails
});

export default reducers;

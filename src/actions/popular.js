const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_POPULAR_MOVIES_SUCCESS = "GET_POPULAR_MOVIES_SUCCESS";
const GET_POPULAR_MOVIES_ERROR = "GET_POPULAR_MOVIES_ERROR";

import { getPopularMovies } from '../utilities';

export function loadPopularMovies() {
  return dispatch => {
    dispatch({
      type: GET_POPULAR_MOVIES
    });

    getPopularMovies()
      .then(res => dispatch(loadPopularMoviesSuccess(res.data.results)))
      .catch(err => dispatch(loadPopularMoviesError(err)));
  }
}

export function loadPopularMoviesSuccess(movies) {
  return {
    type: GET_POPULAR_MOVIES_SUCCESS,
    payload: movies
  }
}

export function loadPopularMoviesError(err) {
  return {
    type: GET_POPULAR_MOVIES_ERROR,
    payload: err
  }
}

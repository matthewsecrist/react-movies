const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS';
const LOAD_MOVIE_DETAILS_SUCCESS = 'LOAD_MOVIE_DETAILS_SUCCESS';
const LOAD_MOVIE_DETAILS_ERROR = 'LOAD_MOVIE_DETAILS_ERROR';

import { getMovieDetails } from '../utilities';

export function loadMovieDetails(id) {
  return dispatch => {
    dispatch({ type: LOAD_MOVIE_DETAILS });

    getMovieDetails(id)
      .then(res => dispatch(loadMovieDetailsSuccess(res.data)))
      .catch(err => dispatch(loadMovieDetailsError(err)))
  }
}

export function loadMovieDetailsSuccess(movie) {
  return {
    type: LOAD_MOVIE_DETAILS_SUCCESS,
    payload: movie
  }
}

export function loadMovieDetailsError(err) {
  return {
    type: LOAD_MOVIE_DETAILS_ERROR,
    payload: err
  }
}

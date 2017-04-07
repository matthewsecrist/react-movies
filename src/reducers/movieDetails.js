const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS';
const LOAD_MOVIE_DETAILS_SUCCESS = 'LOAD_MOVIE_DETAILS_SUCCESS';
const LOAD_MOVIE_DETAILS_ERROR = 'LOAD_MOVIE_DETAILS_ERROR';

export default function movieDetails(state = {
  isFetching: true,
  movie: []
}, action) {

  switch (action.type) {
    case LOAD_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: true
      }
    case LOAD_MOVIE_DETAILS_SUCCESS:
      return {
        isFetching: false,
        movie: action.payload
      };
    case LOAD_MOVIE_DETAILS_ERROR:
    default:
      return state;
  }
}

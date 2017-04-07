const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_POPULAR_MOVIES_SUCCESS = "GET_POPULAR_MOVIES_SUCCESS";
const GET_POPULAR_MOVIES_ERROR = "GET_POPULAR_MOVIES_ERROR";

export default function popularMovies(state = [], action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return action.payload;
    case GET_POPULAR_MOVIES:
    case GET_POPULAR_MOVIES_ERROR:
    default:
      return state;
  }
}

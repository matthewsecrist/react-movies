import axios from 'axios';

const API_URL = "https://api-public.guidebox.com/v2/movies";

import config from '../config';

// Get popular movies.
export function getPopularMovies(params) {
  return axios.get(formatRequest("list", params))
}

export function getMovieDetails(id) {
  return axios.all([getMovie(id), getRelatedMovies(id)])
    .then(axios.spread(function(movie, related) {
      movie.data.related = related.data.results
      return movie
    })
  )
}

//http://api-public.guidebox.com/v2/movies/135934?api_key=YOUR_API_KEY
export function getMovie(id) {
  let url = "/" + id
  return axios.get(formatRequest("movie", url))
}

// http://api-public.guidebox.com/v2/movies/135934/related?api_key=YOUR_API_KEY
export function getRelatedMovies(id) {
  let url = "/" + id + "/related"
  return axios.get(formatRequest("movie", url))
}

// Used to generate a URL, ending up being:
// http://api-public.guidebox.com/v2/movies?api_key=YOUR_API_KEY
function formatRequest(type, params) {
  if(type === "list") {
    if(params) {
      return API_URL + '?api_key=' + config.API_KEY + params + '&limit=100'
    } else {
      return API_URL + '?api_key=' + config.API_KEY + '&limit=100'
    }
  } else {
    return API_URL + params + '?api_key=' + config.API_KEY
  }
}

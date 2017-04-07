import axios from 'axios';

const API_URL = "http://api-public.guidebox.com/v2/movies";

import config from '../config';

// Get popular movies.
export function getPopularMovies() {
  return axios.get(formatRequest("list", "&limit=40"));
}

//http://api-public.guidebox.com/v2/movies/135934?api_key=YOUR_API_KEY
export function getMovieDetails(id) {
  let formatId = "/" + id
  return axios.get(formatRequest("movie", formatId));
}

// Used to generate a URL, ending up being:
// http://api-public.guidebox.com/v2/movies?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&limit=10
function formatRequest(type, params) {
  if(type === "list") {
    return API_URL + '?api_key=' + config.API_KEY + params
  } else {
    return API_URL + params + '?api_key=' + config.API_KEY
  }
}

import React from 'react';
import { Link } from 'react-router';

type Props = {
  movie: object,
}

const MovieItem = ({ movie }: Props) => {
  return (
    <Link to={'/movie/' + movie.id}>
      <img src={movie.size === "large" ? movie.poster_400x570 : movie.poster_240x342} alt="movie"/>
    </Link>

  )
}

export default MovieItem;

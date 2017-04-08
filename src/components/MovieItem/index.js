import React from 'react';
import { Link } from 'react-router';

type Props = {
  movie: object,
}

const MovieItem = ({ movie }: Props) => {
  return (
    <div className="four wide column">
      <Link to={'/movie/' + movie.id}>
        <img src={movie.size === "large" ? movie.poster_400x570 : movie.poster_240x342} alt="movie" width="100%"/>
      </Link>
    </div>

  )
}

export default MovieItem;

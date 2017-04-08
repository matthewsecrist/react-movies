import React from 'react';
import { Link } from 'react-router';

type Props = {
  movie: object,
}

const MovieItem = ({ movie }: Props) => {
  return (
    <div className="four wide column">
        <Link to={'/movie/' + movie.id}>
          <img src={movie.poster_400x570} width="100%" alt="movie"/>
        </Link>
    </div>
  )
}

export default MovieItem;

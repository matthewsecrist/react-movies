import React from 'react';
import { Link } from 'react-router';

type Props = {
  movie: object,
}

const MovieItem = ({ movie }: Props) => {
  return (
    <div className="col-xs-11 col-md-3">
      <div className="box">
        <Link to={'/movie/' + movie.id}>
          <img src={movie.poster_400x570} width="100%" alt="movie"/>
        </Link>
      </div>
    </div>
  )
}

export default MovieItem;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import GenreTag from '../../components/GenreTag';
import CastMember from '../../components/CastMember';
import './index.css';

class Movie extends Component {
  constructor(props) {
    super(props)
    this.props.loadMovieDetails(this.props.params.movieId);
  }

  render() {
    const { movie } = this.props.movie
    if (this.props.movie.isFetching) {
      return <div></div>
    } else {
      return (
        <div className="movie">
          <Link to="/" className="homeButton"><i className="fa fa-arrow-circle-o-left" /> Home</Link>
          <div className="detailsContainer">
            <table>
              <tbody>
              <tr>
                <td>
                  <img src={movie.poster_400x570} alt="movie poster" />
                </td>
                <td>
                  <h1 className="title">{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <table className="cast">
                    <tbody>
                      <tr>
                        <th>Directors</th>
                        <th>Writers</th>
                        <th>Cast</th>
                      </tr>
                      <tr>
                        <td>
                          {movie.directors.map(m =>
                            <CastMember key={m.id} name={m.name} imdb={m.imdb} />
                          )}
                        </td>
                        <td>
                          {movie.writers.map(m =>
                            <CastMember key={m.id} name={m.name} imdb={m.imdb} />
                          )}
                        </td>
                        <td>
                          {movie.cast.slice(0, 10).map(m =>
                            <CastMember key={m.id} name={m.name} imdb={m.imdb} />
                          )}
                        </td>
                        <td>
                          {movie.cast.slice(10, 20).map(m =>
                            <CastMember key={m.id} name={m.name} imdb={m.imdb} />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { movie: state.movieDetails }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import CastMember from '../../components/CastMember';
import Stream from '../../components/Stream';
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
      const stream = movie.purchase_web_sources.concat(movie.subscription_web_sources)
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
                  <div className="streamable">
                    {movie.free_web_sources.length > 0 ? <p>Free Options</p> : <div></div>}
                    {movie.free_web_sources.map(m => <Stream name={m.display_name} key={m.source} link={m.link} />)}
                    <p>Paid Options</p>
                    {stream.map(m => <Stream name={m.display_name} key={m.source} link={m.link} />)}
                  </div>
                  <p>{movie.overview}</p>

                  <table className="cast">
                    <tbody>
                      <tr>
                        <th>Directed By</th>
                        <th>Written By</th>
                        <th>Cast Members</th>
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

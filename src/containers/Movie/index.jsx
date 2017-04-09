import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import CastMember from '../../components/CastMember';
import Stream from '../../components/Stream';
import Navbar from '../../components/Navbar';
import MovieItem from '../../components/MovieItem';

import { Image, Loader, List } from 'semantic-ui-react';


class Movie extends Component {
  componentDidMount() {
    this.props.loadMovieDetails(this.props.params.movieId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.movieId !== nextProps.params.movieId) {
      this.props.loadMovieDetails(nextProps.params.movieId);
    }
  }

  render() {
    const { movie } = this.props.movie
    if (this.props.movie.isFetching) {
      return (
        <div>
          <Navbar />
          <div className="ui grid">
            <Loader active size="massive" />
          </div>
        </div>
      )
    } else {

      return (
        <div>
          <Navbar />
          <div className="ui centered stackable grid">
            <div className="six wide column">
            <Image src={movie.poster_400x570} fluid />
          </div>
          <div className="eight wide column">
            <h1 className="ui huge header">{movie.title}</h1>
            <List>
              <List.Item>{movie.release_year}</List.Item>
              <List.Item>{movie.rating}</List.Item>
            </List>
            <p>{movie.overview}</p>
            <div className="streamable">
              {movie.free_web_sources.length > 0 ? <p className="ui header">Free Options</p> : <span />}
              {movie.free_web_sources.map(m =>
                <Stream name={m.display_name} key={m.source} link={m.link} />
              )}
              {movie.subscription_web_sources.length > 0 ? <p className="ui header">Free with Subscription</p> : <span />}
              {movie.subscription_web_sources.map(m =>
                <Stream name={m.display_name} key={m.source} link={m.link} />
              )}
              <p className="ui header">Paid Options</p>
              {movie.purchase_web_sources.map(m =>
                <Stream name={m.display_name} key={m.source} link={m.link} price={m.formats ? m.formats : null} />
              )}
            </div>

          <p className="ui header">Directed By</p>
          <List>
            {movie.directors.map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
          </List>
          <p className="ui header">Written By</p>
          <List>
            {movie.writers.map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
          </List>
          <p className="ui header">Starring</p>
          <div className="ui grid">
            <div className="eight wide column">
              <List>
                {movie.cast.slice(0, 10).map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
              </List>
            </div>
            <div className="eight wide column">
              {movie.cast.slice(10, 20).map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
            </div>
          </div>
        </div>
      </div>
      <div className="ui centered stackable grid container">
        <p className="ui header">More Like This</p>
        <div className="ui row">
          {movie.related.slice(0, 8).map(m => <MovieItem movie={m} key={m.id} size="small" />)}
        </div>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import CastMember from '../../components/CastMember';
import Stream from '../../components/Stream';

import Navbar from '../../components/Navbar';

import { Image, Loader } from 'semantic-ui-react';


class Movie extends Component {
  constructor(props) {
    super(props)
    this.props.loadMovieDetails(this.props.params.movieId);
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
      const stream = movie.purchase_web_sources.concat(movie.subscription_web_sources)
      return (
        <div>
          <Navbar />
          <div className="ui centered stackable grid">
            <div className="six wide column">
            <Image src={movie.poster_400x570} fluid />
          </div>
          <div className="eight wide column">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className="streamable">
              {movie.free_web_sources.length > 0 ?
              <p>Free Options</p> : <span />} {movie.free_web_sources.map(m =>
                <Stream name={m.display_name} key={m.source} link={m.link} />
              )}
              <p>Paid Options</p>
              {stream.map(m =>
                <Stream name={m.display_name} key={m.source} link={m.link} />
              )}
            </div>

          <h3>Directed By</h3>
            {movie.directors.map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
          <h3>Written By</h3>
            {movie.writers.map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
          <h3>Starring</h3>
          <div className="ui grid">
            <div className="eight wide column">
              {movie.cast.slice(0, 10).map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
            </div>
            <div className="eight wide column">
              {movie.cast.slice(10, 20).map(m =><CastMember key={m.id} name={m.name} imdb={m.imdb} /> )}
            </div>
          </div>
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

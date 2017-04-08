import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import MovieItem from '../../components/MovieItem'
import Navbar from '../../components/Navbar';
import { Loader } from 'semantic-ui-react';


class Movies extends Component {
  componentDidMount() {
    switch (this.props.params.moviesType) {
      case "free":
        this.props.loadPopularMovies("&sources=free");
        break;
      default:
        this.props.loadPopularMovies();
        break;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.moviesType !== nextProps.params.moviesType) {
      switch (nextProps.params.moviesType) {
        case "free":
          this.props.loadPopularMovies("&sources=free");
          break;
        default:
          this.props.loadPopularMovies();
          break;
      }
    }
  }

  render() {
    const { movies } = this.props.movies
    if (this.props.movies.isFetching) {
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
          <div className="ui centered grid container">
            {movies.map(m => <MovieItem movie={m} key={m.id} size="large" />)}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { movies: state.popularMovies }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

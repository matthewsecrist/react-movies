import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import MovieItem from '../../components/MovieItem'
import Navbar from '../../components/Navbar';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router';


class Movies extends Component {
  componentDidMount() {
    let url = "&sources=" + this.props.params.moviesType
    if(this.props.params.moviesType === '') {
      this.props.loadPopularMovies()
    } else {
      this.props.loadPopularMovies(url);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.moviesType !== nextProps.params.moviesType) {
      let url = "&sources=" + nextProps.params.moviesType
      if(nextProps.params.moviesType === ''){
        this.props.loadPopularMovies();
      } else {
        this.props.loadPopularMovies(url);
      }
    }
  }

  render() {
    const { movies } = this.props.movies
    console.log(movies)
    if (this.props.movies.isFetching) {
      return (
        <div>
          <Navbar />
          <div className="ui grid">
            <Loader active size="massive" />
          </div>
        </div>
      )
    } else if (movies.length === 0) {
      console.log("here.")
      return (
        <div>
          <Navbar />
          <div className="ui centered grid">
            <h1>We didn't find any movies from {this.props.params.moviesType}.</h1>
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

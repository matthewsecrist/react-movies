import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import MovieItem from '../../components/MovieItem';
import Navbar from '../../components/Navbar';


class FreeMovies extends Component {
  componentDidMount() {
    this.props.loadPopularMovies("&sources=free");
  }

  render() {
    const { movies } = this.props

    return (
      <div>
        <Navbar />
        <div className="ui centered grid container">
          {movies.map(m => <MovieItem movie={m} key={m.id} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.popularMovies }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FreeMovies);

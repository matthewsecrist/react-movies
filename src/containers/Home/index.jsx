import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import MovieItem from '../../components/MovieItem'


class Home extends Component {
  constructor(props) {
    super(props);
    this.props.loadPopularMovies();
  }

  render() {
    const { movies } = this.props

    return (
      <div>
        <h1>Top Movies</h1>
        <div className="row center-xs">


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

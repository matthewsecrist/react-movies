import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>HOME</h1>
      </div>
    )
  }
}

export default connect()(Home);

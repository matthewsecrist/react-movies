import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';


export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ui center aligned grid container">
          <div className="ui middle aligned column">
            <h1>Welcome to What Can I Watch.</h1>
            <p>Find a movie to buy, rent, stream through a subscription or watch for free.</p>
            <p><a href="http://www.guidebox.com" target="_blank">Powered by Guidebox</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Home);

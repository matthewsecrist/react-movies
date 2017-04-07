import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * App
 */
class About extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;

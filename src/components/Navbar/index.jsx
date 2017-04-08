import React from 'react';
import { Link } from 'react-router';
import { Menu, Input } from 'semantic-ui-react';

class Navbar extends React.Component {
  render() {
    return (
      <Menu inverted className="fixed">
          <Menu.Item name="Top Movies" as={Link} to="/movies/all" />
          <Menu.Item name="Top Free Movies" as={Link} to="/movies/free" />
          <Menu.Item position="right">
            <Input icon="search" placeholder="Search for a movie" />
          </Menu.Item>
      </Menu>

    );
  }
}

export default Navbar;

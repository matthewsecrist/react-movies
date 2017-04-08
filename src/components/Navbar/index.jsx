import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  render() {
    return (
      <Menu inverted className="fixed">
          <Menu.Item name="Top Movies" as={Link} to="/" />
          <Menu.Item name="Top Free Movies" as={Link} to="/free" />
      </Menu>

    );
  }
}

export default Navbar;

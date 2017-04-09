import React from 'react';
import { Link } from 'react-router';
import { Menu, Input, Dropdown } from 'semantic-ui-react';

class Navbar extends React.Component {
  render() {
    return (
      <Menu inverted className="fixed">
        <Dropdown item text='Buy or Rent'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/movies/amazon_buy">Amazon</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/cinemanow">Cinemanow</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/disney_movies_anywhere">Disney Movies Anywhere</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/itunes">iTunes</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/google_play">Google Play</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/vudu">VUDU</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/youtube_purchase">YouTube</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <Dropdown item text='Free With Subscription'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/movies/amazon_prime">Amazon Prime</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/starz_amazon_prime">Starz</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/film_struck">Film Struck</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/hbo_now">HBO</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/hulu_plus">Hulu</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/netflix">Netflix</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/showtime">Showtime</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Free Movies'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/movies/free">Top Free Movies</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/crackle">Crackle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/popcornflix">Popcorn Flix</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/shout_factory_tv">Shout Factory TV</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/snagfilms">Snagfilms</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/vudu_free">Vudu</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/xfinity">Xfinity</Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/viewster">viewster</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item position="right">
            <Input icon="search" placeholder="Search for a movie" />
          </Menu.Item>
      </Menu>

    );
  }
}

export default Navbar;

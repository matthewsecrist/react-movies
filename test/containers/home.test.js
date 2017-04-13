import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../src/containers/Home'

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../src/components/Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

it('renders Home without crashing', () => {
  shallow(<Home />);
});

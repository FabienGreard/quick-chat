import React from 'react';
import { shallow } from 'enzyme';

import { App } from './';

it('renders App without crashing', () => {
  shallow(<App />);
});

import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { store } from '../../helpers';
import { App } from './';

it('renders App without crashing', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';

import { history, store } from '../../helpers';
import { App } from './';

it('renders App without crashing', () => {
  mount(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
});

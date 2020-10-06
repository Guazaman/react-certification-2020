import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Home from './Home.page';

it('Should render the home page', () => {
  const wrapper = render(
    <HashRouter>
      <Home />
    </HashRouter>
  );
  expect(wrapper).not.toBeNull();
});

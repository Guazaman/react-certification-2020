import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home.page';

it('Should render the home page', () => {
  const wrapper = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(wrapper).not.toBeNull();
});

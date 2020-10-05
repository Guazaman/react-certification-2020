import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

it('Should render Menu closed', () => {
  const wrapper = render(<Menu isMenuOpen={false} />);
  expect(wrapper).not.toBeNull();
});

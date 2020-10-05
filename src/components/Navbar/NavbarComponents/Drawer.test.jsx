import React from 'react';
import { render } from '@testing-library/react';
import Drawer from './Drawer';

it('Should render Drawer closed', () => {
  const wrapper = render(<Drawer sideBarstate={false} toggleDrawer={jest.fn()} />);
  expect(wrapper).not.toBeNull();
});


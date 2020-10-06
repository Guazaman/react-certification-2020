import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter, Link } from 'react-router-dom';
import { ListItemText, ListItemIcon } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Drawer from './Drawer';

describe('Test the Drawer closed', () => {
  it('Should render Drawer closed', () => {
    const wrapper = render(<Drawer sideBarstate={false} toggleDrawer={jest.fn()} />);
    expect(wrapper).not.toBeNull();
  });
});

describe('Test the Drawer open', () => {
  const showFavorites = (
    <Link to="/favorites">
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </Link>
  );

  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <HashRouter>
        <Drawer sideBarstate toggleDrawer={jest.fn()} favoritesItem={showFavorites} />
      </HashRouter>
    );
  });

  it('Should render Drawer open', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should have a link to Home', () => {
    const text = wrapper.getByText('Home');
    expect(text).not.toBeNull();
  });

  it('Should have a link to favorites', () => {
    const text = wrapper.getByText('Favorites');
    expect(text).not.toBeNull();
  });
});

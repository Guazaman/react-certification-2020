import React from 'react';
import { Drawer, List, ListItemText, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { SideBarContainer } from './NavbarComponents.styled';

const NavbarDrawer = ({ sideBarstate, toggleDrawer, favoritesItem }) => {
  return (
    <Drawer open={sideBarstate} onClose={toggleDrawer(false)}>
      <SideBarContainer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          <Link to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </Link>
          {favoritesItem}
        </List>
      </SideBarContainer>
    </Drawer>
  );
};

export default NavbarDrawer;

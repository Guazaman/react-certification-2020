import React from 'react';
import { Menu } from '@material-ui/core';

const NavBarMenu = ({ anchorEl, isMenuOpen, handleMenuClose, logButton }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {logButton}
    </Menu>
  );
};

export default NavBarMenu;

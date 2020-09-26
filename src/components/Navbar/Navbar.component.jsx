import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {
  SearchIconContainer,
  SearchInputContainer,
  Separator,
  InputContainer,
} from './Navbar.styled';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [switchState, setswitchState] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSwitch = (event) => {
    setswitchState(event.target.checked);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <SearchInputContainer>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <InputContainer>
              <InputBase placeholder="Search…" />
            </InputContainer>
          </SearchInputContainer>
          <Separator />
          <FormGroup row>
            <FormControlLabel
              control={<Switch checked={switchState} onChange={handleSwitch} />}
              label="Dark Mode"
            />
          </FormGroup>
          <IconButton
            edge="end"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;

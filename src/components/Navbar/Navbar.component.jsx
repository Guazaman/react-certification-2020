import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { SearchBar, Menu, Drawer } from './NavbarComponents';
import { Separator, UserIcon } from './Navbar.styled';
import { useAuth } from '../../providers/Auth';
import { SearchContext } from '../../state';
import { USER_WIZELINE_IMAGE } from '../../utils/constants';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sideBarstate, sideBarsetState] = useState(false);
  const { searchVideos } = useContext(SearchContext);

  const location = useLocation();
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);

  const { authenticated, logout, login } = useAuth();
  const { pathname } = location;

  const toggleDrawer = (sideBaropen) => () => {
    sideBarsetState(sideBaropen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      searchVideos(event.target.value);
    }
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
    handleMenuClose();
  };

  const authenticate = (event) => {
    event.preventDefault();
    login();
    history.push('/');
    handleMenuClose();
  };

  const showSearchBar = pathname === '/' ? <SearchBar onKeyUp={onKeyUp} /> : null;
  const showUserIcon = authenticated ? (
    <UserIcon src={USER_WIZELINE_IMAGE} />
  ) : (
    <AccountCircle />
  );
  const showLogButton = authenticated ? (
    <MenuItem onClick={deAuthenticate}>Logout</MenuItem>
  ) : (
    <MenuItem onClick={authenticate}>Login</MenuItem>
  );
  const showFavorites = authenticated ? (
    <Link to="/favorites">
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </Link>
  ) : null;

  return (
    <>
      <AppBar position="static" style={{ background: '#FB503A' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          {showSearchBar}
          <Separator />
          <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
            {showUserIcon}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        logButton={showLogButton}
      />
      <Drawer
        sideBarstate={sideBarstate}
        toggleDrawer={toggleDrawer}
        favoritesItem={showFavorites}
      />
    </>
  );
};

export default Navbar;

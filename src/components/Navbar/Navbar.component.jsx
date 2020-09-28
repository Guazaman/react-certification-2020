import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import SearchContext from '../../State/SearchContext';

import {
  SearchIconContainer,
  SearchInputContainer,
  Separator,
  InputContainer,
  SideBarContainer,
  UserIcon,
} from './Navbar.styled';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sideBarstate, sideBarsetState] = React.useState(false);
  const { getVideos } = React.useContext(SearchContext);

  const toggleDrawer = (sideBaropen) => () => {
    sideBarsetState(sideBaropen);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      getVideos(event.target.value);
    }
  };

  const history = useHistory();
  const { authenticated, logout, login } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
    handleMenuClose();
  }

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
    handleMenuClose();
  }

  return (
    <>
      <AppBar position="static" style={{ background: '#FB503A' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {pathname === '/' ? (
            <SearchInputContainer>
              <SearchIconContainer>
                <SearchIcon />
              </SearchIconContainer>
              <InputContainer>
                <InputBase placeholder="Search…" onKeyPress={onKeyUp} />
              </InputContainer>
            </SearchInputContainer>
          ) : null}
          <Separator />
          <IconButton
            edge="end"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            {authenticated ? (
              <UserIcon src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png" />
            ) : (
              <AccountCircle />
            )}
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
        {authenticated ? (
          <MenuItem onClick={deAuthenticate}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={authenticate}>Login</MenuItem>
        )}
      </Menu>
      <Drawer open={sideBarstate} onClose={toggleDrawer(false)}>
        <SideBarContainer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <Link to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </Link>
            {authenticated ? (
              <Link to="/favorites">
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </Link>
            ) : null}
          </List>
        </SideBarContainer>
      </Drawer>
    </>
  );
};

export default Navbar;

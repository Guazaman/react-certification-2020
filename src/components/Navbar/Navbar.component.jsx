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
import Modal from '@material-ui/core/Modal';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

import Login from '../Login';
import SearchContext from '../../State/SearchContext';

import { useAuth } from '../../providers/Auth';

import {
  SearchIconContainer,
  SearchInputContainer,
  Separator,
  InputContainer,
  SideBarContainer,
} from './Navbar.styled';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [switchState, setswitchState] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [sideBarstate, sideBarsetState] = React.useState(false);
  const { getVideos } = React.useContext(SearchContext);
  const { authenticated } = useAuth();

  const toggleDrawer = (sideBaropen) => () => {
    sideBarsetState(sideBaropen);
  };

  const handleOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      getVideos(event.target.value);
    }
  };

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
          <SearchInputContainer>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <InputContainer>
              <InputBase placeholder="Search…" onKeyPress={onKeyUp} />
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
        {authenticated ? (
          <MenuItem onClick={handleOpen}>Login</MenuItem>
        ) : (
          <MenuItem onClick={handleOpen}>Logout</MenuItem>
        )}
      </Menu>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Login />
      </Modal>
      <Drawer open={sideBarstate} onClose={toggleDrawer(false)}>
        <SideBarContainer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <Link to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </Link>
            <Link to="/favorites">
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </Link>
          </List>
        </SideBarContainer>
      </Drawer>
    </>
  );
};

export default Navbar;

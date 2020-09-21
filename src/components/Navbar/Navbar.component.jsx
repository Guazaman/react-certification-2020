import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { HamburguerMenuIcon, UserIcon } from '../../icons';
import {
  NavbarContainer,
  NavbarImage,
  NavbarItem,
  InputSearch,
  NavbarButton,
} from './Navbar.styled';

const NavBar = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <NavbarContainer>
      <NavbarItem>
        <NavbarButton>
          <NavbarImage src={HamburguerMenuIcon} />
        </NavbarButton>
        <InputSearch name="searchInput" type="text" placeholder="Search ..." />
      </NavbarItem>

      <NavbarItem>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Dark Mode"
          />
        </FormGroup>
        <NavbarButton>
          <NavbarImage src={UserIcon} />
        </NavbarButton>
      </NavbarItem>
    </NavbarContainer>
  );
};

export default NavBar;

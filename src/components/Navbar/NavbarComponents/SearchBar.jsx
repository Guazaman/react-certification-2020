import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import {
  SearchIconContainer,
  SearchInputContainer,
  InputContainer,
} from './NavbarComponents.styled';

const SearchBar = ({ onKeyUp }) => {
  return (
    <SearchInputContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <InputContainer>
        <InputBase placeholder="Search…" onKeyPress={onKeyUp} />
      </InputContainer>
    </SearchInputContainer>
  );
};

export default SearchBar;

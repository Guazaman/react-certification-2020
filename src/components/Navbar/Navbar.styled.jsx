import styled from 'styled-components';

import { SearchIcon } from '../../icons';

export const NavbarContainer = styled.div`
  height: 65px;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: gold;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarImage = styled.img`
  height: 30px;
`;

export const InputSearch = styled.input`
  height: 32px;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  background: url(${SearchIcon}) no-repeat scroll 6px 6px;
  background-size: 20px;
  padding-left: 35px;
  background-color: white;
`;

export const NavbarButton = styled.button`
  border: none;
  background-color: transparent;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  &:hover {
    background-color: coral;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

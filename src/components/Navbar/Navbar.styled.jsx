import styled from 'styled-components';

export const SearchIconContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

export const SearchInputContainer = styled.div`
  width: auto;
  position: relative;
  margin-left: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const Separator = styled.div`
  flex-grow: 1;
`;

export const InputContainer = styled.div`
  input {
    padding: 8px 8px 8px 0px;
    padding-left: calc(1em + 32px);
    color: white;
  }
`;

export const SideBarContainer = styled.div`
  height: 100%;
  width: 200px;
  a {
    color: inherit;
    display: flex;
    text-decoration: none;
    padding: 8px 16px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;

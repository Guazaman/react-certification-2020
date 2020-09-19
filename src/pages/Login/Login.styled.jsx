import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  height: 350px;
`;

export const LoginContainerElement = styled.div`
  width: 48%;
  &:first-child {
    border-right: 1px solid lightgray;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginFormInput = styled.input`
  margin: 15px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const LoginFormButton = styled(LoginFormInput)`
  background-color: dimgray;
  border: none;
  font-size: 15px;
  color: white;
`;

export const GuestButton = styled.button`
  background-color: orange;
  border: none;
  font-size: 15px;
  color: white;
  height: 35px;
  width: 80%;
  border-radius: 10px;
`;

export const LoginTitle = styled.h3`
  text-align: left;
  margin: 0 0 10px 14px;
  color: orange;
`;

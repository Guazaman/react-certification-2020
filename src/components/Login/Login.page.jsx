import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';

import {
  LoginContainer,
  LoginContainerElement,
  LoginForm,
  LoginFormInput,
  LoginFormButton,
  GuestButton,
  LoginTitle,
} from './Login.styled';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/secret');
  }

  return (
    <LoginContainer>
      <LoginContainerElement>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={authenticate}>
          <LoginFormInput type="text" name="name" placeholder="Username" />
          <LoginFormInput type="password" name="name" placeholder="Password" />
          <LoginFormButton type="submit" value="Submit" />
        </LoginForm>
      </LoginContainerElement>
      <LoginContainerElement>
        <GuestButton type="submit">Continue as a guest</GuestButton>
      </LoginContainerElement>
    </LoginContainer>
  );
}

export default LoginPage;

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

describe('Should render the navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });

  it('Should render the hamburguer menu', () => {
    const logo = wrapper.getByTestId('hamburguer-menu');
    expect(logo[0]).not.toBeNull();
  });

  it('Should render the search input', () => {
    const input = wrapper.getByPlaceholderText('Search…');
    expect(input).not.toBeNull();
  });

  it('Should show the incognito avatar when not logged in', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: false,
      };
    });
    const incognitoIcon = wrapper.getByTestId('incognit-icon');
    expect(incognitoIcon).not.toBeNull();
  });
});

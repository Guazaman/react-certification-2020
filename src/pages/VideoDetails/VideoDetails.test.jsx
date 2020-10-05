import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoDetails from './VideoDetails.page';
import AuthProvider from '../../providers/Auth';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => {
    return { currentVideo: { snippet: {} } };
  },
}));

describe('Test the Favorites page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <AuthProvider>
          <VideoDetails />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('Should render the video details page', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should render iframe', () => {
    const text = wrapper.getByTestId('iframe video');
    expect(text).not.toBeNull();
  });

  it('Should render title', () => {
    const text = wrapper.getByTestId('title video');
    expect(text).not.toBeNull();
  });

  it('Should render description', () => {
    const text = wrapper.getByTestId('desc video');
    expect(text).not.toBeNull();
  });
});

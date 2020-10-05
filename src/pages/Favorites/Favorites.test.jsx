import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Favorites from './Favorites.page';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => {
    return { videos: [] };
  },
}));

describe('Test the Favorites page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>
    );
  });

  it('Should render the favorites page', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should render the text', () => {
    const text = wrapper.getAllByText(
      'When you find a video you like, click Add to Favorites button to see it here.'
    );
    expect(text).not.toBeNull();
  });

  it('Should render the title', () => {
    const title = wrapper.getAllByText('No items yet.');
    expect(title).not.toBeNull();
  });
});

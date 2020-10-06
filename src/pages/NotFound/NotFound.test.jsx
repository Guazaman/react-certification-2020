import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NotFound from './NotFound.page';

describe('Test the not found page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <HashRouter>
        <NotFound />
      </HashRouter>
    );
  });

  it('Should render the not found page', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should have a image', () => {
    const img = wrapper.getByAltText('Not found image');
    expect(img).not.toBeNull();
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toBe('404.png');
  });

  it('Should have a text', () => {
    const text = wrapper.getByText('Sorry, we could not find this Page.');
    expect(text.tagName).toBe('H2');
    expect(text).not.toBeNull();
  });

  it('Should have a link to back home', () => {
    const anchor = wrapper.getByText('Back To Home');
    const container = anchor.closest('a');
    expect(anchor).not.toBeNull();
    expect(container.getAttribute('href')).toBe('#/');
  });
});

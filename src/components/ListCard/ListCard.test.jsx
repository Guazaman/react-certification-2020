import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListCardComponent from './ListCard.component';

describe('Test the List Card Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <ListCardComponent
          title="test title card"
          description="test description card"
          url="test url card"
          videoId="testVideoID"
          detailsView={false}
          key="test key"
        />
      </BrowserRouter>
    );
  });

  it('Should render a Card', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should have a title', () => {
    const text = wrapper.getByText('test title card');
    expect(text).not.toBeNull();
    expect(text.tagName).toBe('H2');
  });

  it('Should have a description', () => {
    const text = wrapper.getByText('test description card');
    expect(text).not.toBeNull();
    expect(text.tagName).toBe('P');
  });

  it('Should have a url', () => {
    const text = wrapper.getByText('test title card');
    const container = text.closest('a');
    expect(text).not.toBeNull();
    expect(container.getAttribute('href')).toBe('/video-details/testVideoID');
  });

  it('Should have a image', () => {
    const img = wrapper.getByAltText('test url card');
    expect(img).not.toBeNull();
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toBe('test url card');
  });
});

describe('Test the List Card Details Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <ListCardComponent
          title="test title card"
          description="test description card"
          url="test url card"
          videoId="testVideoID"
          detailsView
          key="test key"
        />
      </BrowserRouter>
    );
  });

  it('Should render a Card Details', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should have a title', () => {
    const text = wrapper.getByText('test title card');
    expect(text).not.toBeNull();
    expect(text.tagName).toBe('H3');
  });

  it('Should have a url', () => {
    const text = wrapper.getByText('test title card');
    const container = text.closest('a');
    expect(text).not.toBeNull();
    expect(container.getAttribute('href')).toBe('/video-details/testVideoID');
  });

  it('Should have a image', () => {
    const img = wrapper.getByAltText('test url card');
    expect(img).not.toBeNull();
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toBe('test url card');
  });
});

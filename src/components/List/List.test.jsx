import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import ListComponent from './List.component';

const videos = [
  {
    snippet: {
      title: 'title 1',
      description: 'desc 1 ',
      thumbnails: {
        high: { url: 'url 1' },
      },
    },
    id: { videoId: 'videosID 1' },
  },
  {
    snippet: {
      title: 'title 2',
      description: 'desc 2 ',
      thumbnails: {
        high: { url: 'url 2' },
      },
    },
    id: { videoId: 'videosID 2' },
  },
];

describe('Test the List Card Component with detailsView false', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <HashRouter>
        <ListComponent videos={videos} detailsView={false} />
      </HashRouter>
    );
  });

  it('Should render the List', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should renders two List Cards', () => {
    expect(wrapper.container.children[0].children[0].children.length).toBe(2);
  });
});

describe('Test the List Card Component with detailsView true', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <HashRouter>
        <ListComponent videos={videos} detailsView />
      </HashRouter>
    );
  });

  it('Should render the List', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should renders two List Cards', () => {
    expect(wrapper.container.children[0].children[0].children.length).toBe(2);
  });
});

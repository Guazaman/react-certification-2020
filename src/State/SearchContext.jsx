import React from 'react';

const SearchContext = React.createContext({
  videos: [],
  currentVideo: {
    snippet: {
      title: 'Inicial',
      description: 'Inicial',
      thumbnails: { high: { url: 'Inicial' } },
    },
  },
  favoritesVideos: [],
  searchVideos: () => {},
  setCurrentVideo: () => {},
  setFavoritesVideos: () => {},
});

export default SearchContext;

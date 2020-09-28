import React from 'react';

const SearchContext = React.createContext({
  videos: [],
  currentVideo: {},
  favoritesVideos: [],
  getVideos: () => {},
  setCurrentVideo: () => {},
  setFavoritesVideos: () => {},
});

export default SearchContext;

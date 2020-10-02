import React from 'react';

const SearchContext = React.createContext({
  videos: [],
  currentVideo: {},
  favoritesVideos: [],
  searchVideos: () => {},
  setCurrentVideo: () => {},
  setFavoritesVideos: () => {},
});

export default SearchContext;

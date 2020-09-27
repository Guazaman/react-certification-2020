import React from 'react';

const SearchContext = React.createContext({
  videos: [],
  currentVideo: {},
  searchTerm: '',
  favoritesVideos: [],
  getVideos: () => {},
  setCurrentVideo: () => {},
  setSearchTerm: () => {},
  setFavoritesVideos: () => {},
});

export default SearchContext;

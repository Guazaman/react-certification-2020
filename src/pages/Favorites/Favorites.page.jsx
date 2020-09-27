/* eslint-disable react/button-has-type */
import React from 'react';
import List from '../../components/List';
import SearchContext from '../../State/SearchContext';

const FavoritesPage = () => {
  const { favoritesVideos } = React.useContext(SearchContext);

  return (
    <>
      {favoritesVideos && favoritesVideos.length ? (
        <List videos={favoritesVideos} />
      ) : (
        <p>Waiting...</p>
      )}
    </>
  );
};

export default FavoritesPage;

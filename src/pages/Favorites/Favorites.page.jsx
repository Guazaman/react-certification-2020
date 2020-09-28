/* eslint-disable react/button-has-type */
import React from 'react';
import List from '../../components/List';

const FavoritesPage = () => {
  const favoritesVideos = JSON.parse(localStorage.getItem('favoritesVideos'));

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

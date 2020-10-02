import React from 'react';
import { FavoritesTextContainer } from './Favorites.styled';
import { ListComponent } from '../../components';
import { SearchContext } from '../../state';

const FavoritesPage = () => {
  const { favoritesVideos, dispatch } = React.useContext(SearchContext);

  React.useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, [dispatch]);

  return favoritesVideos.favorites && favoritesVideos.favorites.length ? (
    <ListComponent videos={favoritesVideos.favorites} />
  ) : (
    <FavoritesTextContainer>
      <h1>No items yet.</h1>
      <p>When you find a video you like, click Add to Favorites button to see it here.</p>
    </FavoritesTextContainer>
  );
};

export default FavoritesPage;

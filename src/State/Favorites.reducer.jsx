import { FAVORITES_VIDEOS_STORAGE_KEY } from '../utils/constants';

const FavoritesReducer = (favoritesVideos, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorites = favoritesVideos.favorites
        ? favoritesVideos.favorites.concat(action.payload)
        : [action.payload];
      localStorage.setItem(FAVORITES_VIDEOS_STORAGE_KEY, JSON.stringify(favorites));
      return {
        ...favoritesVideos,
        favorites,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = favoritesVideos.favorites.filter(
        (video) => video.id.videoId !== action.payload.videoId
      );
      localStorage.setItem(FAVORITES_VIDEOS_STORAGE_KEY, JSON.stringify(favorites));
      return {
        ...favoritesVideos,
        favorites,
      };
    }
    case 'LOAD_FROM_STORAGE': {
      let favorites = localStorage.getItem(FAVORITES_VIDEOS_STORAGE_KEY) || [];
      favorites = favorites.length ? JSON.parse(favorites) : [];
      return {
        ...favoritesVideos,
        favorites,
      };
    }
    default:
      return favoritesVideos;
  }
};

export default FavoritesReducer;

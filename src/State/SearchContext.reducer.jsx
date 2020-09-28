const FavoritesReducer = (favoritesVideos, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorites = favoritesVideos.favorites
        ? favoritesVideos.favorites.concat(action.payload)
        : [action.payload];
      localStorage.setItem('favorite_videos', JSON.stringify(favorites));
      return {
        ...favoritesVideos,
        favorites,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = favoritesVideos.favorites.filter(
        (video) => video.videoId !== action.payload.videoId
      );
      localStorage.setItem('favorite_videos', JSON.stringify(favorites));
      return {
        ...favoritesVideos,
        favorites,
      };
    }
    case 'LOAD_FROM_STORAGE': {
      let favorites = localStorage.getItem('favorite_videos') || [];
      favorites = favorites.length ? JSON.parse(favorites) : [];
      console.log(favorites);
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

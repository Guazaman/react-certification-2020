import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import NotFoundPage from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import VideoDetailsPage from '../../pages/VideoDetails';
import AuthProvider from '../../providers/Auth';
import Navbar from '../Navbar';
import Private from '../Private';
import SearchContext from '../../state/SearchContext';
import YoutubeApi from '../../api/YoutubeApi';
import FavoritesReducer from '../../state/SearchContext.reducer';

const App = () => {
  const [currentVideo, setCurrentVideo] = React.useState(null);
  const [videos, setVideos] = React.useState(null);
  const [favoritesVideos, dispatch] = React.useReducer(FavoritesReducer, []);

  const getVideos = async (searchTerm) => {
    const response = await YoutubeApi.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    localStorage.setItem('videos', JSON.stringify(response.data.items));
  };

  React.useEffect(() => {
    getVideos('wizeline');
  }, []);

  React.useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, [dispatch]);

  return (
    <SearchContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
        videos,
        getVideos,
        favoritesVideos,
        dispatch,
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Private exact path="/favorites" component={FavoritesPage} />
            <Route exact path="/video-details/:videoId" component={VideoDetailsPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;

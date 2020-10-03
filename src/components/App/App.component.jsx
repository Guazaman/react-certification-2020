import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../Navbar';
import PrivateComponent from '../Private';
import { HomePage, NotFoundPage, FavoritesPage, VideoDetailsPage } from '../../pages';
import AuthProvider from '../../providers/Auth';
import YoutubeApi from '../../api/YoutubeApi';
import { SearchContext, FavoritesReducer } from '../../state';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const [favoritesVideos, dispatch] = useReducer(FavoritesReducer, []);

  const searchVideos = async (searchTerm) => {
    const response = await YoutubeApi.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    searchVideos('wizeline');
  }, []);

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, [dispatch]);

  return (
    <SearchContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
        videos,
        searchVideos,
        favoritesVideos,
        dispatch,
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateComponent exact path="/favorites">
              <FavoritesPage />
            </PrivateComponent>
            <Route exact path="/video-details/:videoId" component={VideoDetailsPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFoundPage from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import VideoDetailsPage from '../../pages/VideoDetails';
import AuthProvider from '../../providers/Auth';
import Navbar from '../Navbar';
import Private from '../Private';

import SearchContext from '../../State/SearchContext';

import YoutubeApi from '../../api/YoutubeApi';

const App = () => {
  const [currentVideo, setCurrentVideo] = React.useState(null);
  const [favoritesVideos, setFavoritesVideos] = React.useState([]);
  const [videos, setVideos] = React.useState(null);

  const getVideos = async (searchTerm) => {
    const response = await YoutubeApi.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    localStorage.setItem('videos', JSON.stringify(response.data.items));
  };

  return (
    <SearchContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
        videos,
        getVideos,
        favoritesVideos,
        setFavoritesVideos,
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Private exact path="/favorites" component={FavoritesPage} />
            <Route exact path="/video-details/:idVideo" component={VideoDetailsPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;

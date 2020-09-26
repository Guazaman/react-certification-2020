import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFoundPage from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import VideoDetailsPage from '../../pages/VideoDetails';
import Navbar from '../Navbar';
import Private from '../Private';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Private exact path="/favorites">
            <FavoritesPage />
          </Private>
          <Route exact path="/video-details">
            <VideoDetailsPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

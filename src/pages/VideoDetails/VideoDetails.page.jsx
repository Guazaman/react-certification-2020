/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { SearchContext } from '../../state';
import { ListComponent } from '../../components';
import { useAuth } from '../../providers/Auth';
import {
  VideoDetailsContainer,
  VideoDetailsCurrent,
  VideoDetailsList,
  IFrameVideo,
  CurrentVideoTitle,
  CurrentOptionsContainer,
  CurrentVideoDesc,
} from './VideoDetails.styled';

const VideoDetailsPage = () => {
  const history = useHistory();
  const videos = JSON.parse(localStorage.getItem('videos'));
  const defaultVideo = { snippet: { title: '', description: '' } };
  const { currentVideo, dispatch, favoritesVideos } = useContext(SearchContext);
  const [isFavorite, setFavorite] = useState(false);
  const { videoId } = useParams();
  const { authenticated } = useAuth();

  const {
    snippet: { title, description },
  } = currentVideo || defaultVideo;

  const checkFavorite = () => {
    return (
      authenticated &&
      favoritesVideos.favorites &&
      favoritesVideos.favorites.length &&
      favoritesVideos.favorites.some((video) => video.id.videoId === videoId)
    );
  };

  const addToFavorites = () => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: currentVideo,
    });
    setFavorite(true);
  };

  const removeToFavorites = () => {
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: {
        videoId,
      },
    });
    setFavorite(false);
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
    setFavorite(checkFavorite);
  }, [videoId]);

  if (currentVideo === null) {
    history.push('/');
  }

  return (
    <VideoDetailsContainer>
      <VideoDetailsCurrent>
        <IFrameVideo src={`https://www.youtube.com/embed/${videoId}`} />
        <CurrentOptionsContainer>
          <CurrentVideoTitle>{title}</CurrentVideoTitle>
          {isFavorite ? (
            <Button variant="contained" onClick={removeToFavorites}>
              Remove from Favorites
            </Button>
          ) : (
            <Button variant="contained" onClick={addToFavorites}>
              Add to Favorites
            </Button>
          )}
        </CurrentOptionsContainer>
        <CurrentVideoDesc>{description}</CurrentVideoDesc>
      </VideoDetailsCurrent>
      <VideoDetailsList>
        <ListComponent videos={videos} detailsView />
      </VideoDetailsList>
    </VideoDetailsContainer>
  );
};

export default VideoDetailsPage;

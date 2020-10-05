/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {
  VideoDetailsContainer,
  VideoDetailsCurrent,
  VideoDetailsList,
  IFrameVideo,
  CurrentVideoTitle,
  CurrentOptionsContainer,
  CurrentVideoDesc,
} from './VideoDetails.styled';
import { SearchContext } from '../../state';
import { ListComponent } from '../../components';
import { useAuth } from '../../providers/Auth';
import YoutubeApi from '../../api/YoutubeApi';

const VideoDetailsPage = () => {
  const history = useHistory();
  const defaultVideo = { snippet: { title: '', description: '' } };
  const { currentVideo, dispatch, favoritesVideos } = useContext(SearchContext);
  const [isFavorite, setFavorite] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState([]);
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

  const searchRelatedVideos = async (searchTerm) => {
    const response = await YoutubeApi.get('/search', {
      params: {
        relatedToVideoId: searchTerm,
      },
    });
    setRelatedVideos(response.data.items);
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

  useEffect(() => {
    searchRelatedVideos(videoId);
  }, [videoId]);

  if (currentVideo === null) {
    history.push('/');
  }

  const showFavoritesButton = isFavorite ? (
    <Button variant="contained" onClick={removeToFavorites}>
      Remove from Favorites
    </Button>
  ) : (
    <Button variant="contained" onClick={addToFavorites}>
      Add to Favorites
    </Button>
  );

  return (
    <VideoDetailsContainer>
      <VideoDetailsCurrent>
        <IFrameVideo
          src={`https://www.youtube.com/embed/${videoId}`}
          data-testid="iframe video"
        />
        <CurrentOptionsContainer>
          <CurrentVideoTitle data-testid="title video">{title}</CurrentVideoTitle>
          {authenticated ? showFavoritesButton : null}
        </CurrentOptionsContainer>
        <CurrentVideoDesc data-testid="desc video">{description}</CurrentVideoDesc>
      </VideoDetailsCurrent>
      <VideoDetailsList>
        <ListComponent videos={relatedVideos} detailsView />
      </VideoDetailsList>
    </VideoDetailsContainer>
  );
};

export default VideoDetailsPage;

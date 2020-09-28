import React from 'react';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import SearchContext from '../../State/SearchContext';
import List from '../../components/List';
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
  const { currentVideo, dispatch, favoritesVideos } = React.useContext(SearchContext);
  const { videoId } = useParams();
  const [isFavorite, setFavorite] = React.useState(false);
  const { authenticated } = useAuth();

  const videos = JSON.parse(localStorage.getItem('videos'));

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

  React.useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
    const favorite =
      authenticated &&
      favoritesVideos.favorites &&
      favoritesVideos.favorites.length > 0 &&
      favoritesVideos.favorites.some((video) => video.id.videoId === videoId);
    setFavorite(favorite);
  }, [videoId]);

  const history = useHistory();

  const notValidVideo = { snippet: { title: 'null', description: 'null' } };

  const {
    snippet: { title, description },
  } = currentVideo || notValidVideo;

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
        {videos && videos.length ? (
          <List videos={videos} detailsView />
        ) : (
          <p>Waiting...</p>
        )}
      </VideoDetailsList>
    </VideoDetailsContainer>
  );
};

export default VideoDetailsPage;

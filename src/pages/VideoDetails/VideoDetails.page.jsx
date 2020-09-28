import React from 'react';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import SearchContext from '../../State/SearchContext';
import List from '../../components/List';
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
  const { currentVideo, dispatch } = React.useContext(SearchContext);
  const { idVideo } = useParams();
  const videos = JSON.parse(localStorage.getItem('videos'));

  const addToFavorites = () => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: currentVideo,
    });
  };

  const removeToFavorites = () => {
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: {
        idVideo,
      },
    });
  };

  const favorite = false;

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
        <IFrameVideo src={`https://www.youtube.com/embed/${idVideo}`} />
        <CurrentOptionsContainer>
          <CurrentVideoTitle>{title}</CurrentVideoTitle>
          {favorite ? (
            <Button variant="contained" onClick={removeToFavorites}>
              Remove to Favorites
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

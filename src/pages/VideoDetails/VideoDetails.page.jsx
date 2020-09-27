/* eslint-disable react/button-has-type */
import React from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
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
  const { currentVideo, favoritesVideos, setFavoritesVideos, videos } = React.useContext(
    SearchContext
  );
  const { idVideo } = useParams();

  const addToFavorites = () => {
    setFavoritesVideos(() => [...favoritesVideos, currentVideo]);
  };

  const {
    snippet: { title, description },
  } = currentVideo;

  return (
    <VideoDetailsContainer>
      <VideoDetailsCurrent>
        <IFrameVideo src={`https://www.youtube.com/embed/${idVideo}`} />
        <CurrentOptionsContainer>
          <CurrentVideoTitle>{title}</CurrentVideoTitle>
          <Button variant="contained" onClick={addToFavorites}>
            Add to Favorites
          </Button>
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

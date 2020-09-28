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
  const { currentVideo, favoritesVideos, setFavoritesVideos } = React.useContext(
    SearchContext
  );
  const { idVideo } = useParams();
  const videos = JSON.parse(localStorage.getItem('videos'));

  const addToFavorites = () => {
    setFavoritesVideos(() => [...favoritesVideos, currentVideo]);
    localStorage.setItem('favoritesVideos', JSON.stringify(favoritesVideos));
  };

  const removeToFavorites = () => {
    setFavoritesVideos(() => {
      return favoritesVideos.filter((item) => item.id !== currentVideo.id);
    });
    localStorage.setItem('favoritesVideos', JSON.stringify(favoritesVideos));
  };

  const {
    snippet: { title, description },
  } = currentVideo;

  const handleCheck = () => {
    return favoritesVideos.some((item) => currentVideo.id === item.id);
  };

  return (
    <VideoDetailsContainer>
      <VideoDetailsCurrent>
        <IFrameVideo src={`https://www.youtube.com/embed/${idVideo}`} />
        <CurrentOptionsContainer>
          <CurrentVideoTitle>{title}</CurrentVideoTitle>
          {handleCheck() ? (
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

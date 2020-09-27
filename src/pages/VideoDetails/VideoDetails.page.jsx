/* eslint-disable react/button-has-type */
import React from 'react';
import Button from '@material-ui/core/Button';
import DetailsList from '../../components/DetailsList';
import YoutubeApi from '../../api/YoutubeApi';

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
  const [state, setState] = React.useState(null);

  const handleSubmit = async () => {
    const response = await YoutubeApi.get('/search', {
      params: {
        q: 'wizeline',
      },
    });
    setState({
      videos: response.data.items,
    });
  };

  return (
    <VideoDetailsContainer>
      <VideoDetailsCurrent>
        <IFrameVideo src="https://www.youtube.com/embed/nmXMgqjQzls" />
        <CurrentOptionsContainer>
          <CurrentVideoTitle>Titulo</CurrentVideoTitle>
          <Button variant="contained" onClick={handleSubmit}>
            Add to Favorites
          </Button>
        </CurrentOptionsContainer>
        <CurrentVideoDesc>This is a test description</CurrentVideoDesc>
      </VideoDetailsCurrent>
      <VideoDetailsList>
        {state && state.videos ? (
          <DetailsList videos={state.videos} />
        ) : (
          <p>Waiting...</p>
        )}
      </VideoDetailsList>
    </VideoDetailsContainer>
  );
};

export default VideoDetailsPage;

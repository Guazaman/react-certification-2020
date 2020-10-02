import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListCard from '../ListCard';
import { ListContainer } from './List.styled';

const List = ({ videos, detailsView }) => {
  return (
    <ListContainer>
      <Grid container spacing={3}>
        {videos.map((video) => {
          const {
            snippet: {
              title,
              description,
              thumbnails: {
                high: { url },
              },
            },
            id,
          } = video;

          const videoId = id.videoId ? id.videoId : id.channelId;
          return (
            <ListCard
              title={title}
              description={description}
              url={url}
              videoId={videoId}
              detailsView={detailsView}
            />
          );
        })}
      </Grid>
    </ListContainer>
  );
};

export default List;

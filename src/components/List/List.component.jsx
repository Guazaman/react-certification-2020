import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ListContainer } from './List.styled';
import ListCardComponent from '../ListCard';

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
            id: { videoId },
          } = video;
          return (
            <ListCardComponent
              title={title}
              description={description}
              url={url}
              videoId={videoId}
              detailsView={detailsView}
              key={videoId}
            />
          );
        })}
      </Grid>
    </ListContainer>
  );
};

export default List;

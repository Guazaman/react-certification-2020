import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListCard from '../ListCard';

import { ListContainer } from './List.styled';

const List = ({ props }) => {
  const { videos } = props;
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

          const idVideo = id.videoId ? id.videoId : id.channelId;

          return (
            <Grid item xs={12} md={4} key={idVideo}>
              <ListCard title={title} description={description} url={url} />
            </Grid>
          );
        })}
      </Grid>
    </ListContainer>
  );
};

export default List;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import DetailsListListCard from '../DetailsListCard';

import { ListContainer } from './DetailsList.styled';

const DetailsList = ({ videos }) => {
  return (
    <ListContainer>
      <Grid container spacing={3}>
        {videos.map((video) => {
          const {
            snippet: {
              title,
              thumbnails: {
                high: { url },
              },
            },
            id,
          } = video;

          const idVideo = id.videoId ? id.videoId : id.channelId;

          return (
            <Grid item xs={12} md={12} key={idVideo}>
              <DetailsListListCard title={title} url={url} />
            </Grid>
          );
        })}
      </Grid>
    </ListContainer>
  );
};

export default DetailsList;

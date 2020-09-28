import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListCard from '../ListCard';
import DetailsListListCard from '../DetailsListCard';
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

          const idVideo = id.videoId ? id.videoId : id.channelId;

          return !detailsView ? (
            <Grid item xs={12} md={4} key={idVideo}>
              <ListCard
                title={title}
                description={description}
                url={url}
                idVideo={idVideo}
              />
            </Grid>
          ) : (
            <Grid item xs={12} md={12} key={idVideo}>
              <DetailsListListCard
                title={title}
                description={description}
                url={url}
                idVideo={idVideo}
              />
            </Grid>
          );
        })}
      </Grid>
    </ListContainer>
  );
};

export default List;

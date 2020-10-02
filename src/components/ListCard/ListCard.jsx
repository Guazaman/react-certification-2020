import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core';
import { SearchContext } from '../../state';
import { CardContainer, CardImage, CardTitle } from './ListCard.styles';

const ListCard = ({ title, description, url, videoId, detailsView }) => {
  const { setCurrentVideo } = React.useContext(SearchContext);

  const onListCardClick = () => {
    setCurrentVideo({
      snippet: { title, description, thumbnails: { high: { url } }, videoId },
      id: { videoId },
    });
  };

  return (
    <Grid item xs={12} md={detailsView ? 12 : 4}>
      <Link to={`/video-details/${videoId}`}>
        {detailsView ? (
          <CardContainer onClick={onListCardClick}>
            <CardImage src={url} />
            <CardTitle>{title}</CardTitle>
          </CardContainer>
        ) : (
          <Card onClick={onListCardClick}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={url} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Link>
    </Grid>
  );
};

export default ListCard;

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SearchContext from '../../state/SearchContext';
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
    <Grid item xs={12} md={detailsView ? 12 : 4} key={videoId}>
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

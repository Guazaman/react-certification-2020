import React from 'react';

import { Link } from 'react-router-dom';
import { CardContainer, CardImage, CardTitle } from './DetailsListCard.styled';
import SearchContext from '../../State/SearchContext';

const DetailsListCard = ({ title, url, idVideo, description }) => {
  const { setCurrentVideo } = React.useContext(SearchContext);

  const onListCardClick = () => {
    setCurrentVideo({
      snippet: { title, description, thumbnails: { high: { url } }, idVideo },
      id: { idVideo },
    });
  };

  return (
    <Link to={`/video-details/${idVideo}`}>
      <CardContainer onClick={onListCardClick}>
        <CardImage src={url} />
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </Link>
  );
};

export default DetailsListCard;

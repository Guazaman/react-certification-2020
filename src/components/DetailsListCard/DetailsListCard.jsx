import React from 'react';

import { CardContainer, CardImage, CardTitle } from './DetailsListCard.styled';

const DetailsListCard = ({ title, url }) => {
  return (
    <CardContainer>
      <CardImage src={url} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default DetailsListCard;

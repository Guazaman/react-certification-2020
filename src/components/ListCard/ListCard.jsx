import React from 'react';

import {
  ListCardContainer,
  ListCardImage,
  ListCardTitle,
  ListCardDescription,
} from './ListCard.styled';

function ListCard({ title, description, url }) {
  return (
    <ListCardContainer>
      <ListCardImage src={url} />
      <ListCardTitle>{title}</ListCardTitle>
      <ListCardDescription>{description}</ListCardDescription>
    </ListCardContainer>
  );
}

export default ListCard;

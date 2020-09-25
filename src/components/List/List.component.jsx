import React from 'react';
import ListCard from '../ListCard';

import { ListContainer } from './List.styled';

const List = (props) => {
  const { props: sec } = props;
  const { videos } = sec;
  if (videos) {
    const stuff1 = videos.map((video) => {
      const { snippet } = video;
      const { title, description, thumbnails } = snippet;
      const { high } = thumbnails;
      const { url } = high;
      return <ListCard title={title} description={description} url={url} />;
    });
    return <ListContainer>{stuff1}</ListContainer>;
  }
};

export default List;

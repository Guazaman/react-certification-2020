import React from 'react';
import List from '../../components/List';
import SearchContext from '../../State/SearchContext';
import { HomePageText } from './Home.styled';

const HomePage = () => {
  const { videos } = React.useContext(SearchContext);
  return videos && videos.length ? (
    <List videos={videos} />
  ) : (
    <HomePageText>Please enter some search keyword</HomePageText>
  );
};

export default HomePage;

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../../components/List';
import SearchContext from '../../State/SearchContext';
import { SpinnerContainer } from './Home.styled';

const HomePage = () => {
  const { videos } = React.useContext(SearchContext);
  return videos && videos.length ? (
    <List videos={videos} />
  ) : (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  );
};

export default HomePage;

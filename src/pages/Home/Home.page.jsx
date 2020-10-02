import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { SpinnerContainer } from './Home.styled';
import { ListComponent } from '../../components';
import { SearchContext } from '../../state';

const HomePage = () => {
  const { videos } = React.useContext(SearchContext);
  return videos && videos.length ? (
    <ListComponent videos={videos} />
  ) : (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  );
};

export default HomePage;

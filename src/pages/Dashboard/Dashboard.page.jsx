/* eslint-disable react/button-has-type */
import React from 'react';

import Navbar from '../../components/Navbar';
import List from '../../components/List';

import YoutubeApi from '../../components/Api/YoutubeApi';

const Dashboard = () => {
  const [state, setState] = React.useState({
    videos: null,
  });

  const handleSubmit = async () => {
    const response = await YoutubeApi.get('/search', {
      params: {
        q: 'wizeline',
      },
    });
    setState({
      videos: response.data.items,
    });
  };

  return (
    <>
      <Navbar />
      <button onClick={handleSubmit}>Do the thing</button>
      <div>react-certification-2020</div>
      {state.videos ? <List props={state} /> : null}
    </>
  );
};

export default Dashboard;

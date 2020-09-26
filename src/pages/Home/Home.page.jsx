/* eslint-disable react/button-has-type */
import React from 'react';
import List from '../../components/List';
import YoutubeApi from '../../api/YoutubeApi';

const HomePage = () => {
  const [state, setState] = React.useState(null);

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
      <button onClick={handleSubmit}> This is the Home Page</button>
      {state && state.videos ? <List props={state} /> : <p>Waiting...</p>}
    </>
  );
};

export default HomePage;

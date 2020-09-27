/* eslint-disable react/button-has-type */
import React from 'react';
import List from '../../components/List';
import YoutubeApi from '../../api/YoutubeApi';

const FavoritesPage = () => {
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
      <button onClick={handleSubmit}> This is the favorites Page</button>
      {state && state.videos ? <List videos={state.videos} /> : <p>Waiting...</p>}
    </>
  );
};

export default FavoritesPage;

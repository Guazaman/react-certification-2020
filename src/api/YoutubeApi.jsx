import axios from 'axios';

const KEY = 'AIzaSyA76UVRCC7DLAWHsTtTm2aYdUxrbL9OPnM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});

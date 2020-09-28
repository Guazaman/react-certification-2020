import axios from 'axios';

const KEY = 'AIzaSyC6huJeUUGMrYDoD1HGed4Xg8QQgSyzesY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});

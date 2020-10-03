import axios from 'axios';

const KEY = 'AIzaSyCiuk3oAHYP8rdUpMZIfnM62QdaK7nPO8Y';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 12,
    type: 'video',
    key: KEY,
  },
});

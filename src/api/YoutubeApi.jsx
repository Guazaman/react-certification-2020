import axios from 'axios';

const KEY = 'AIzaSyA3dm6-kGB1FUr8DpXSy3Vg9OIYL_XPAeI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});

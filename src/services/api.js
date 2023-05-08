import axios from 'axios';

const KEY = process.env.REACT_APP_SECRET_KEY;
const MAX_NUM_RESULTS = 25;

const getPlaylistItemInfo = async (playlistId) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      part: 'snippet',
      maxResults: MAX_NUM_RESULTS,
      key: KEY,
      playlistId,
    },
  });
  return response;
};

const getChannelInfo = async (channelId) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
    params: {
      part: 'snippet',
      id: channelId,
      maxResults: MAX_NUM_RESULTS,
      key: KEY,
    },
  });
  return response;
};

export default {
  getPlaylistItemInfo,
  getChannelInfo,
};

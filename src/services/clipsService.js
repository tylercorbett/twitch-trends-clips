const BASE_CLIPS_URL = 'https://api.twitch.tv/helix/clips/?game_id=';
const makeDownloadUrl = id => `https://clips-media-assets2.twitch.tv/AT-cm%${id}.mp4`;
const fortniteId = 33214;
const makeClipsUrl = gameId => BASE_CLIPS_URL + gameId;

export const getFortniteClips = async () => {
  const fortniteUrl = makeClipsUrl(fortniteId);

  const response = await fetch(fortniteUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Client-ID': process.env.REACT_APP_CLIENT_ID,
    }
  });
  const json = await response.json();
  
  return json;
};

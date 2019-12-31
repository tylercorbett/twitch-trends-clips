const BASE_CLIPS_URL = 'https://api.twitch.tv/helix/clips/?game_id=';
const makeDownloadUrl = id => `https://clips-media-assets2.twitch.tv/AT-cm%${id}.mp4`;
const fortniteId = 33214;
const makeClipsUrl = gameId => BASE_CLIPS_URL + gameId;

export const getFortniteClips = async () => {
  const fortniteUrl = makeClipsUrl(fortniteId);
  // Take the ; off the end of the env variable, idk why it keeps adding one
  const clientId = process.env.REACT_APP_CLIENT_ID.substring(0, process.env.REACT_APP_CLIENT_ID.length - 1);

  const response = await fetch(fortniteUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Client-ID': clientId,
    }
  });
  const json = await response.json();
  return json;
};

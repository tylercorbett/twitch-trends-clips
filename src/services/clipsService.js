const BASE_CLIPS_URL = 'https://api.twitch.tv/helix/clips/?game_id=';
const fortniteId = 33214;
const makeDownloadUrl = id => `https://clips-media-assets2.twitch.tv/AT-cm%${id}.mp4`;
const makeClipsUrl = gameId => BASE_CLIPS_URL + gameId;

export const getDownloadUrl = thumbnailUrl => {
  let code = thumbnailUrl;
  const startIndex = thumbnailUrl.indexOf('%');
  const hasAT = thumbnailUrl.includes('AT');
  if (startIndex === 43) {
    code = code.substring(startIndex + 1, 55);
  }
  else if (!hasAT) {
    code = code.substring(38, 47);
  }
  else {
    code = code.substring(38, 49);
  }

  const url = makeDownloadUrl(code);
  return url;
};

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

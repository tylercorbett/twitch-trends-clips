const BASE_CLIPS_URL = 'https://api.twitch.tv/helix/clips/?game_id=';
const fortniteId = 33214;
const pubgId = 493057;
const makeDownloadUrl = id => `https://clips-media-assets2.twitch.tv/AT-cm%${id}.mp4`;
const makeAltDownloadUrl = id => `https://clips-media-assets2.twitch.tv/${id}.mp4`;
const makeClipsUrl = gameId => BASE_CLIPS_URL + gameId;

export const getDownloadUrl = thumbnailUrl => {
  let code = thumbnailUrl;
  const startIndex = thumbnailUrl.indexOf('%');
  const hasAT = thumbnailUrl.includes('AT');
  const hasOffset = thumbnailUrl.includes('offset');

  if (startIndex === 43) {
    code = code.substring(startIndex + 1, 55);
  }
  else if (hasOffset) {
    return 'Cannot download clip';
  }
  else if (!hasAT) {
    code = code.substring(38, 47);
  }
  else {
    code = code.substring(38, 49);
  }
  const url1 = makeDownloadUrl(code);
  const url2 = makeAltDownloadUrl(code);
  return { url1, url2 };
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

export const getPUBGClips = async () => {
  const pubgUrl = makeClipsUrl(pubgId);

  const response = await fetch(pubgUrl, {
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

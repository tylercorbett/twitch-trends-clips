const makeDownloadUrl = id => `https://clips-media-assets2.twitch.tv/AT-cm%${id}.mp4`;
const makeAltDownloadUrl = id => `https://clips-media-assets2.twitch.tv/${id}.mp4`;
const makeClipUrl = (gameId, numberOfClips) => `https://api.twitch.tv/helix/clips/?first=${numberOfClips}&game_id=${gameId}`;

export const gameIdDictionary = {
  Fortnite: 33214,
  PUBG: 493057,
  LoL: 21779,
  GTAV: 32982,
  Rainbow6: 460630,
  Dota: 29595,
  CSGO: 32399,
  Overwatch: 488552,
};

export const getClips = async (game, numberOfClips) => {
  const gameId = gameIdDictionary[game];
  const url = makeClipUrl(gameId, numberOfClips);
  const response = await fetch(url, {
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

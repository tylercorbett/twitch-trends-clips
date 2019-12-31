const BASE_CLIPS_URL = 'https://api.twitch.tv/helix/clips/?game_id=';
const makeDownloadUrl = id => `https://clips-media-assets2.twitch.tv/AT-cm%${id}.mp4`;
export const fortniteId = 33214;
export const makeClipsUrl = gameId => BASE_CLIPS_URL + gameId;

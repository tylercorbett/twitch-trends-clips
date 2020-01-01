import React from 'react';
import Clip from '../clip/Clip';
import PropTypes from 'prop-types';
import './Clips.scss';
import { getDownloadUrl } from '../../services/clipsService';

const Clips = ({ clips }) => {
  const clipItems = clips.map((clip, i) => {
    const { embed_url, url, thumbnail_url } = clip;
    const downloadUrl = getDownloadUrl(thumbnail_url);

    if (downloadUrl === 'Cannot download clip') {
      return null;
    }
    return <Clip key={i} vidUrl={embed_url} downloadUrl1={downloadUrl.url1} downloadUrl2={downloadUrl.url2}/>
  });

  return <ul className="Clips">{clipItems}</ul>;
};

Clips.propTypes = {
  clips: PropTypes.array.isRequired,
};

export default Clips;

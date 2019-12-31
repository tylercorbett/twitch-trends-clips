import React from 'react';
import Clip from '../clip/Clip';
import PropTypes from 'prop-types';
import './Clips.scss';
import { getDownloadUrl } from '../../services/clipsService';

const Clips = ({ clips }) => {
  const clipItems = clips.map((clip, i) => {
    const { embed_url, thumbnail_url } = clip;
    const downloadUrl = getDownloadUrl(thumbnail_url);
    
    return <Clip key={i} vidUrl={embed_url} downloadUrl={downloadUrl}/>
  });

  return <ul>{clipItems}</ul>;
};

Clips.propTypes = {
  clips: PropTypes.array.isRequired,
};

export default Clips;

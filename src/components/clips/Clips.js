import React from 'react';
import Clip from '../clip/Clip';
import PropTypes from 'prop-types';
import './Clips.scss';
import { getDownloadUrl } from '../../services/clipsService';

const Clips = ({ clips, setClips }) => {
  const clipItems = clips.map((clip, i) => {
    const { embed_url, thumbnail_url } = clip;
    const downloadUrl = getDownloadUrl(thumbnail_url);

    const handleDeleteClick = () => {
      const newClips = clips.filter(clip => clip !== clips[i]);
      setClips(newClips);
    };

    if (downloadUrl === 'Cannot download clip') {
      return null;
    }
    return <Clip onDeleteClick={handleDeleteClick} key={i} vidUrl={embed_url} downloadUrl1={downloadUrl.url1} downloadUrl2={downloadUrl.url2}/>
  });

  return <ul className="Clips">{clipItems}</ul>;
};

Clips.propTypes = {
  clips: PropTypes.array.isRequired,
  setClips: PropTypes.func.isRequired,
};

export default Clips;

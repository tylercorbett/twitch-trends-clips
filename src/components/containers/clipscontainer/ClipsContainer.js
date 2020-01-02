import React, { useState, useEffect } from 'react';
import { getClips, fortniteId } from '../../../services/clipsService';
import Clips from '../../clips/Clips';
import PropTypes from 'prop-types';

const ClipsContainer = ({ setIsFormSubmitted, isFormSubmitted, activeGame, numberOfClips }) => {
  const [clips, setClips] = useState([]);

  // By default load 25 Fortnite clips
  useEffect(() => {
    getClips('Fortnite', 25)
      .then(clips => setClips(clips.data));
  }, []);

  if (isFormSubmitted) {
    getClips(activeGame, numberOfClips)
      .then(clips => setClips(clips.data));
      
    setIsFormSubmitted(false);
  }

  if (clips.length === 0) return <h2>Loading...</h2>
  return (
    <div>
      <Clips clips={clips} setClips={setClips}/>
    </div>
  );
};

ClipsContainer.propTypes = {
  numberOfClips: PropTypes.string.isRequired,
  activeGame: PropTypes.string.isRequired,
  isFormSubmitted: PropTypes.bool.isRequired,
  setIsFormSubmitted: PropTypes.func.isRequired,
}

export default ClipsContainer;

import React, { useState, useEffect } from 'react';
import { getClips } from '../../../services/clipsService';
import Clips from '../../clips/Clips';
import PropTypes from 'prop-types';
import { PacmanLoader } from "react-spinners";

const ClipsContainer = ({ setIsFormSubmitted, isFormSubmitted, activeGame, numberOfClips }) => {
  const [clips, setClips] = useState([]);

  // By default load 20 Fortnite clips
  useEffect(() => {
    getClips('Fortnite', 20)
      .then(clips => setClips(clips.data));
  }, []);

  if (isFormSubmitted) {
    getClips(activeGame, numberOfClips)
      .then(clips => setClips(clips.data));
      
    setIsFormSubmitted(false);
  }

  if (clips.length === 0) return <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', height: '14rem' }}><PacmanLoader color="purple" size={75}/></div> 
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

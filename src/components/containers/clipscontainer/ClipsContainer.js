import React, { useState, useEffect } from 'react';
import { getFortniteClips } from '../../../services/clipsService';
import Clips from '../../clips/Clips';

const ClipsContainer = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    getFortniteClips()
      .then(data => setClips(data));
  }, []);


  if (clips.length === 0) return <h2>Loading...</h2>
  return (
    <div>
      <Clips clips={clips.data} />
    </div>
  );
};

export default ClipsContainer;

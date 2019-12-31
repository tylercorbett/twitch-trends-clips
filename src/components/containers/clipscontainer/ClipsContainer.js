import React, { useState, useEffect } from 'react';
import { getFortniteClips } from '../../../services/clipsService';

const ClipsContainer = () => {
  const [clips, updateClips] = useState([]);

  useEffect(() => {
    const clipsData = getFortniteClips();
  }, []);

  return (
    <div className="clips-container">
      <h1>Container</h1>
    </div>
  );
};

export default ClipsContainer;

import React, { useState, useEffect } from 'react';
import { getFortniteClips } from '../../../services/clipsService';

const ClipsContainer = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    getFortniteClips()
      .then(data => setClips(data));
  }, []);
  console.log(clips);
  if (clips.length === 0) return <h2>Loading...</h2>

  return (
    <div className="clips-container">
      <h1>Container</h1>
    </div>
  );
};

export default ClipsContainer;

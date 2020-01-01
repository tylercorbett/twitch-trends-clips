import React, { useState, useEffect } from 'react';
import { getFortniteClips, getPUBGClips } from '../../../services/clipsService';
import Clips from '../../clips/Clips';

const ClipsContainer = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    getFortniteClips()
      .then(clips => setClips(clips.data));
  }, []);



  if (clips.length === 0) return <h2>Loading...</h2>
  return (
    <div>
      <Clips clips={clips} setClips={setClips}/>
    </div>
  );
};

export default ClipsContainer;

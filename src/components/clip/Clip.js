import React from 'react';
import PropTypes from 'prop-types';
import './Clip.scss'; 

// https://clips-media-assets2.twitch.tv/26111712528-offset-31782.mp4

const Clip = ({ vidUrl, downloadUrl }) => {
  return (
    <li className="Clip">
      <div className="vid-container">
        {/* <iframe
        title={vidUrl}
        autoPlay={false}
        src={vidUrl}
        height="360"
        width="640"
        allowFullScreen={true}
        preload="metadata"
        >
        </iframe> */}
        <div className="vid-placeholder"/>
      </div>
      
      <a href={downloadUrl} className="download">Download</a>
    </li>
  );
};

Clip.propTypes = {
  vidUrl: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired,
};

export default Clip;

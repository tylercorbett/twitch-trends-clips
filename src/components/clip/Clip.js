import React from 'react';
import PropTypes from 'prop-types';
import './Clip.scss'; 

// https://clips-media-assets2.twitch.tv/26111712528-offset-31782.mp4

const Clip = ({ vidUrl, downloadUrl }) => {
  return (
    <li className="Clip">
      <h1>Clip</h1>
      {/* <iframe
        title={vidUrl}
        autoPlay="false"
        src={vidUrl}
        height="360"
        width="640"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
        preload="metadata"
        >
      </iframe> */}
      <a href={downloadUrl}>Download</a>
    </li>
  );
};

Clip.propTypes = {
  vidUrl: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired,
};

export default Clip;

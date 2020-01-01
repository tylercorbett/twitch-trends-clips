import React from 'react';
import PropTypes from 'prop-types';
import './Clip.scss'; 

const Clip = ({ vidUrl, downloadUrl1, downloadUrl2 }) => {
  return (
    <li className="Clip">
      <div className="vid-container">
        <iframe
        title={vidUrl}
        autoPlay={false}
        src={vidUrl}
        height="360"
        width="640"
        allowFullScreen={true}
        preload="metadata"
        >
        </iframe>
        {/* <div className="vid-placeholder"/> */}
      </div>
      <span className="download-container">
        <a href={downloadUrl1} className="download">Direct Download</a>
        <a href={downloadUrl2} className="download">Alt Download</a>
      </span>
    </li>
  );
};

Clip.propTypes = {
  vidUrl: PropTypes.string.isRequired,
  downloadUrl1: PropTypes.string.isRequired,
  downloadUrl2: PropTypes.string.isRequired,
};

export default Clip;

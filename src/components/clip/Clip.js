import React from 'react';
import PropTypes from 'prop-types';
import './Clip.scss';

const Clip = ({ vidUrl, downloadUrl }) => {
  return (
    <li className="Clip">
      <h1>Clip</h1>
      {/* <iframe
      autoPlay="false"
    src={vidUrl}
    height="360"
    width="640"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true">
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

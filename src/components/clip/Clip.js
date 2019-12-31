import React from 'react';
import PropTypes from 'prop-types';
import './Clip.scss';

const Clip = ({ vidUrl, downloadUrl }) => {
  return (
    <li className="Clip">
      <h1>Clip</h1>
      <button>Download</button>
    </li>
  );
};

Clip.propTypes = {
  vidUrl: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired,
};

export default Clip;

import React from 'react';
import Clip from '../clip/Clip';
import PropTypes from 'prop-types';
import './Clips.scss';

const Clips = ({ clips }) => {
  const clipItems = clips.map(c => {
    return <Clip />
  });

  return <ul>{clipItems}</ul>;
};

Clips.propTypes = {
  clips: PropTypes.array.isRequired,
};

export default Clips;

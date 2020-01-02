import React from 'react';
import './Controls.scss';
import PropTypes from 'prop-types';
import { gameIdDictionary } from '../../services/clipsService';

const games = Object.keys(gameIdDictionary);

const Controls = ({ onSubmit, numberOfClips, activeGame, updateActiveGame, updateClipNumber }) => {
  return (
    <section className="Controls">
      <h4>Filter your search...</h4>
      <section className="games">
        <h5 className="game-title">Game</h5>
        <div className="games-container">
          {games.map(game => {
            return (
              <button key={game} onClick={() => updateActiveGame(game)} className={activeGame === game ? 'active' : ''}>{game}</button>
            );
          })}
        </div>
      </section>
      <section className="clip-count">
        <h5>Number of clips to load</h5>
        <p>{numberOfClips}</p>
        <input type="range" onChange={e => updateClipNumber(e.target.value)} max={50} min={1} defaultValue={20} step={1}/>
      </section>
      <button onClick={onSubmit} className="load">LOAD CLIPS</button>
    </section>
  );
};

Controls.propTypes = {
  activeGame: PropTypes.string.isRequired,
  updateActiveGame: PropTypes.func.isRequired,
  updateClipNumber: PropTypes.func.isRequired,
  numberOfClips: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Controls;

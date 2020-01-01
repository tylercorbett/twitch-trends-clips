import React from 'react';
import './Controls.scss';

const Controls = () => {
  return (
    <section className="Controls">
      <h4>Filter your search...</h4>
      <section className="games">
        <h5>Game</h5>
        <div className="games-container">
          <button>Fortnite</button>
          <button>PUBG</button>
          <button>CSGO</button>
          <button>LoL</button>
          <button>Dota</button>
        </div>
      </section>
      <section className="clip-count">
        <h5>Number of clips</h5>
        <input type="number" defaultValue={20}/>
      </section>
      <button className="load">LOAD CLIPS</button>
    </section>
  );
};

export default Controls;

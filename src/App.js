import React, { useState } from 'react';
import './index.css';
import ClipsContainer from './components/containers/clipscontainer/ClipsContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Controls from './components/controls/Controls';

const App = () => {
  const [activeGame, setActiveGame] = useState('Fortnite');
  const [numberOfClips, setNumberOfClips] = useState('20');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsFormSubmitted(true);
  }

  return (
    <div className="App">
      <Header />
      <Controls onSubmit={handleSubmit} numberOfClips={numberOfClips} updateClipNumber={setNumberOfClips} activeGame={activeGame} updateActiveGame={setActiveGame}/>
      <ClipsContainer setIsFormSubmitted={setIsFormSubmitted} numberOfClips={numberOfClips} activeGame={activeGame} isFormSubmitted={isFormSubmitted}/>
      <Footer/>
    </div>
  );
};

export default App;

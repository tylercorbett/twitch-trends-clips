import React from 'react';
import './index.css';
import ClipsContainer from './components/containers/clipscontainer/ClipsContainer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <ClipsContainer />
    </div>
  );
};

export default App;

import React from 'react';
import './index.css';
import ClipsContainer from './components/containers/clipscontainer/ClipsContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Controls from './components/controls/Controls';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Controls />
      <ClipsContainer />
      <Footer/>
    </div>
  );
};

export default App;

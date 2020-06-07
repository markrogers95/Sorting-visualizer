import React from 'react';

import './App.css';
import VisualizerMain from './VisualizerMain/VisualizerMain';
import Toolbar from './Toolbar/Toolbar';

function Main() {
  return (
    <div className="App">
      <div className="title-wrap">
        <h2 className="title">
          Sorting Visualizer!
        </h2>
      </div>
      <Toolbar></Toolbar>
      <VisualizerMain></VisualizerMain>
    </div>
  );
}

export default Main;

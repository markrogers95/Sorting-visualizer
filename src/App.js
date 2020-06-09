import React from 'react';

import './App.css';
import VisualizerMain from './VisualizerMain/VisualizerMain';
import Toolbar from './Toolbar/Toolbar';

function Main() {
  return (
    <div className="App">
      <div className="title-wrap">
        <div className = "left">
          <h2 className="title  left">
            Sorting Visualizer!
          </h2>
        </div>
        <div className = "right">
          <h3 className="title right">
            Algorithms
          </h3>
        </div>
      </div>
      <Toolbar></Toolbar>
      <VisualizerMain></VisualizerMain>
    </div>
  );
}

export default Main;

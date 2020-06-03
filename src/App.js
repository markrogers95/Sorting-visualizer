import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisualizerMain from './VisualizerMain/VisualizerMain';
import Toolbar from './Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <div className="title-wrap">
        <h1 className="title">
          Sorting Visualizer
        </h1>
      </div>
      <Toolbar></Toolbar>
      <VisualizerMain></VisualizerMain>
    </div>
  );
}

export default App;

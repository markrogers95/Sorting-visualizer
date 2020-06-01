import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortVisualizer from './SortVisualizer/SortVisualizer';

function App() {
  return (
    <div className="App">
      <div className="title-wrap">
        <h1 className="title">
          Sorting Visualizer
        </h1>
      </div>
      <SortVisualizer></SortVisualizer>
    </div>
  );
}

export default App;

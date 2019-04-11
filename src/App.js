import React, { Component } from 'react';
import './App.css';
import './grid.scss';

import MainContent from './main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <MainContent/>
      </div>
    );
  }
}

export default App;

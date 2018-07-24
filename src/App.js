import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tanner's <code>WIP: personal site v2</code></h1>
        </header>
        <p className="App-intro">
          I am currently remaking my original personal site, this time with React!
        </p>
      </div>
    );
  }
}

export default App;

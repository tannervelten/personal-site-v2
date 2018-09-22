import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from './components/Intro';
import Resume from './components/Resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Intro} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;

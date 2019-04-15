import React, { Component } from 'react'
import ReactDom from 'react-dom'
import BeepTest from './Components/BeepTest'
import Interval from './Components/Interval'
import Random from './Components/Random'

class App extends Component {
  render() {
    return (
      <div className="main">
          <h1>Fitness Trainer</h1>
          <button className="btn">Interval Beeper</button>
          <button className="btn">Random Beeper</button>
          <button className="btn">Beep Test</button>
      </div>
    );
  }
}

export default App;

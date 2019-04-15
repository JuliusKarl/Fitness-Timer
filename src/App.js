import React, { Component } from 'react'
import ReactDom from 'react-dom'
import BeepTest from './Components/BeepTest'
import Interval from './Components/Interval'
import Random from './Components/Random'

class App extends Component {
  render() {
    return (
      <div>
          <h1>Fitness Trainer</h1>
          <button>Interval Beeper</button>
          <button>Random Beeper</button>
          <button>Beep Test</button>
      </div>
    );
  }
}

export default App;

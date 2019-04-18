// Very Expensive App at the moment. To Do:
// Have an active state that tracks the current component else home
// Find a way around component casting
//
//
// Author: Julius Karl Macrohon


import React, { Component } from 'react'
import BeepTest from './Components/BeepTest'
import Interval from './Components/Interval'
import Random from './Components/Random'
import Spinner from 'react-spinner-material';

import beep from './resources/beep.mp3'
import beepTestAudio from './resources/beeptest.mp3'

class App extends Component {
  constructor() {
    super()
    this.state = {
      home: true,
      Interval: false,
      Random: false,
      BeepTest: false,
      loaded: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.beep = new Audio(beep);
    this.beepTestAudio = new Audio(beepTestAudio);
  }

  componentDidMount() {
    this.beep.load()
    this.beepTestAudio.load()
    this.beep.oncanplaythrough = () => {
      this.beepTestAudio.oncanplaythrough = () => {
        this.setState({
          loaded: true
        })
      }
    }
  }

  handleChange(event) {
    const {name} = event.target
    this.setState({
      home: false,
      Interval: false,
      Random: false,
      BeepTest: false,
      [name]: true,
    })
  }
  render() {
    return (
      <div>
        <div id="spinner" className="activeWindow" style={{display: this.state.loaded && "none"}}>
              <Spinner size={100} spinnerColor={"#333"} spinnerWidth={6} visible={true} />
              <h2>Loading</h2>
        </div>
        <div className="main" style={{display: !this.state.loaded && "none"}}>
            <button
              name="home"
              className="headerIcon"
              onClick={this.handleChange}>
                Fitness Trainer
            </button>
            {this.state.home ? 
            <div className="activeWindow">
              <button 
                name="Interval" 
                className="btn" 
                onClick={this.handleChange}>
                  Interval Beeper
              </button>
              <button 
                name="Random" 
                className="btn" 
                onClick={this.handleChange}>
                  Random Beeper
              </button>
              <button 
                name="BeepTest" 
                className="btn" 
                onClick={this.handleChange}>
                  Beep Test
              </button>
            </div> : <p></p>}
            {this.state.Interval? <Interval audio={this.beep} exists={this.state.Interval}/>: <p></p>}
            {this.state.Random? <Random audio={this.beep} exists={this.state.Random}/>: <p></p>}
            {this.state.BeepTest? <BeepTest audio={this.beepTestAudio} exists={this.state.BeepTest}/>: <p></p>}
        </div>
        <p id="footer">
          © 2018 <i>JKMACRO</i> AND <i>MACROMEDIA</i> LIMITED ALL RIGHTS RESERVED
        </p>
      </div>
    );
  }
}

export default App;

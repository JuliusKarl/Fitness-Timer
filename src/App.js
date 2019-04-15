// Very Expensive App at the moment. To Do:
// Have an active state that tracks the current component else home
// Find a way around component casting
//
//
// Author: Julius Karl Macrohon


import React, { Component } from 'react'
import ReactDom from 'react-dom'
import BeepTest from './Components/BeepTest'
import Interval from './Components/Interval'
import Random from './Components/Random'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      Interval: false,
      Random: false,
      BeepTest: false,
    }
    this.handleChange = this.handleChange.bind(this)
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
    console.log(this.state)
  }
  render() {
    return (
      <div className="main">
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
          {this.state.Interval? <Interval />: <p></p>}
          {this.state.Random? <Random />: <p></p>}
          {this.state.BeepTest? <BeepTest />: <p></p>}
      </div>
    );
  }
}

export default App;

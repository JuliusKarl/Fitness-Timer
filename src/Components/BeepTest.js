import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beep.mp3'

class BeepTest extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            play: false,
            stop: true,
        }
        this.url = beep;
        this.audio = new Audio(this.url);
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
        this.changeValues = this.changeValues.bind(this)
    }
    componentWillUnmount() {
        this.stop()
    }
    start = () => {
        this.setState({
            play: true,
            stop: false,
        })
        this.play()
    }

    stop = () => {
        this.audio.pause()
        this.setState({
            count: this.state.count,
            play: false,
            stop: true
        })
    }

    reset = () => {
        this.setState({
        })
    }
//  Function to play sound. Not timed correctly
    play() {
        this.play()
    }
//  Changing Minimum and Maximum interval times.
    changeValues = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
   
    render() {
//      Formatting Time Display: Find way to double digit
        if (this.state.count == 10) {
            this.setState({
                count: 0,
                seconds: this.state.seconds + 1,
            })
        }

        return(
            <div className="activeWindow">
                <h1 className="number">
                    {this.state.count}
                </h1>
                <select className="btn">
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                </select>
                {this.state.stop && <button
                    onClick={this.start}
                    className="btn start">
                    Start
                </button>}
                {this.state.play && <button
                    onClick={this.stop}
                    className="btn start">
                    Pause
                </button>}
                <button
                    onClick={this.reset}
                    className="btn reset"
                    style={
                        {visibility: 
                        this.state.count == 0 && 
                        "hidden"}
                    }>
                    Reset
                </button>
                <input type="text" className="btn hide" />
            </div>
        )
    }
}

export default BeepTest
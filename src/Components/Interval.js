import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beep.mp3'

class Interval extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            seconds: 0,
            minute: 0,
            interval: 0,
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
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 100)
        this.play()
    }

    stop = () => {
        clearInterval(this.myInterval)
        clearInterval(this.clapInterval)
        this.audio.pause()
        this.setState({
            count: this.state.count,
            play: false,
            stop: true
        })
    }

    reset = () => {
        this.setState({
            count: 0,
            seconds: 0,
            min: 0,
        })
    }
//  Function to play sound. Not timed correctly
    play() {
        if (this.state.interval > 0) {
            this.clapInterval = setInterval(() => {
                this.audio.play()
            }, this.state.interval * 1000)
        }
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
        if (this.state.minute == 60) {
            this.setState({
                seconds: 0,
                minute: this.state.minute + 1
            })
        }
        return(
            <div className="activeWindow">
                <h1 className="number">
                    {this.state.minute}: 
                    {this.state.seconds}: 
                    {this.state.count}
                </h1>
                <input
                    required
                    type="number"
                    pattern="[0-9]*"
                    name="interval"
                    className="btn"
                    placeholder="Interval (seconds)"
                    onChange={this.changeValues}
                />
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
                        this.state.seconds == 0 &&
                        this.state.minute == 0 && 
                        "hidden"}
                    }>
                    Reset
                </button>
            </div>
        )
    }
}
export default Interval
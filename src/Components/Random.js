import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beep.mp3'

class Random extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            seconds: 0,
            minute: 0,
            min: 0,
            max: 0,
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
        clearTimeout(this.clapTimeout)
        clearTimeout(this.repeatBeep)
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
            minute: 0,
        })
    }
//  Function to play sound. Not timed correctly
    play() {
        const randomNumber = 
            Math.floor(Math.random() * 
            (this.state.max * 1000 - 
            this.state.min * 1000 + 1000) + 
            this.state.min * 1000);
        const delay = 
            (this.state.max < this.state.min ? 
            (this.state.min ? 
            this.state.min : this.state.max) * 1000 : 
            randomNumber)

        if (this.state.min || this.state.max) {
            this.clapTimeout = setTimeout(() => {
                this.audio.play()
            }, delay)
            this.repeatBeep = setTimeout(() => {
                this.play()
            }, delay)
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
        if (this.state.seconds == 60) {
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
                    name="min"
                    className="btn"
                    placeholder="Min (seconds)"
                    onChange={this.changeValues}
                />
                <input
                    required
                    type="number"
                    pattern="[0-9]*"
                    name="max"
                    className="btn"
                    placeholder="Max (seconds)"
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

export default Random
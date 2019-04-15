import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beep.mp3'

class Random extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            min: 0,
            max: 0,
            play: false,
            stop: true
        }
        this.url = beep;
        this.audio = new Audio(this.url);
        this.play = this.play.bind(this)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
        this.changeValues = this.changeValues.bind(this)
    }

    play = () => {
        
    }
    
    start = () => {
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                play: true,
                stop: false
            })
        }, 10)
        console.log(this.state.min)
        console.log(this.state.max)
    }

    stop = () => {
        clearInterval(this.myInterval)
        this.setState({
            count: this.state.count,
            play: false,
            stop: true
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    changeValues = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="activeWindow">
                <h1 className="number">{Math.round(this.state.count/100)}</h1>
                <input
                    type="number"
                    pattern="[0-9]*"
                    name="min"
                    className="btn"
                    placeholder="Min (seconds)"
                    onChange={this.changeValues}
                />
                <input
                    type="number"
                    pattern="[0-9]*"
                    name="max"
                    className="btn"
                    placeholder="Max (seconds)"
                    onChange={this.changeValues}
                />
                {this.state.stop && <button
                    onClick={this.start}
                    className="btn">
                    Start
                </button>}
                {this.state.play && <button
                    onClick={this.stop}
                    className="btn">
                    Pause
                </button>}
                <button
                    onClick={this.reset}
                    className="btn"
                    style={{visibility: this.state.count === 0 && "hidden"}}>
                    Reset
                </button>
            </div>
        )
    }
}

export default Random
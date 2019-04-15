import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beep.mp3'

class Interval extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.url = beep;
        this.audio = new Audio(this.url);
        this.play = this.play.bind(this)
        this.start = this.start.bind(this)
    }

    play = () => {
        this.audio.play();
    }
    
    start = () => {
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button
                    onClick={this.start}
                    className="btn">
                    Start
                </button>
                <button 
                    onClick={this.play}
                    className="btn">
                    Clap
                </button>
            </div>
        )
    }
}

export default Interval
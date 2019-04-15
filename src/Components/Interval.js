import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beep.mp3'
import Sound from 'react-sound'

class Interval extends Component {
    constructor() {
        super()
        this.state = {}
        this.url = beep;
        this.audio = new Audio(this.url);
        this.play = this.play.bind(this)
    }
    play = () => {
        this.audio.play();
    }
    render() {
        return(
            <div>
                <h3>Interval Component</h3>
                <button 
                    onClick={this.play}>
                    Clap
                </button>
            </div>
        )
    }
}

export default Interval
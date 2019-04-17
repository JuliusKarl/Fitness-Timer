import React, {Component} from 'react'
import ReactDom from 'react-dom'
import beep from './../resources/beeptest.mp3'

class BeepTest extends Component {
    constructor() {
        super()
        this.state = {
            count: 1,
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
        this.audio.play()
    }

    stop = () => {
        this.audio.pause()
        this.setState({
            play: false,
            stop: true
        })
    }

    reset = () => {
        this.setState({
            count: 1
        })
        this.stop()
        this.audio.currentTime = 0;
        document.getElementById("select").selectedIndex = "0"
    }
//  Changing Minimum and Maximum interval times.
    changeValues = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
   
    render() {
        return(
            <div className="activeWindow">
                <h1 className="number">
                    {this.state.count}
                </h1>
                <select id="select" name="count" className="btn" onChange={this.changeValues}>
                    <option default value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                    <option value="5">Level 5</option>
                    <option value="6">Level 6</option>
                    <option value="7">Level 7</option>
                    <option value="8">Level 8</option>
                    <option value="9">Level 9</option>
                    <option value="10">Level 10</option>
                    <option value="11">Level 11</option>
                    <option value="12">Level 12</option>
                    <option value="13">Level 13</option>
                    <option value="14">Level 14</option>
                    <option value="15">Level 15</option>
                    <option value="16">Level 16</option>
                    <option value="17">Level 17</option>
                    <option value="18">Level 18</option>
                    <option value="19">Level 19</option>
                    <option value="10">Level 20</option>
                    <option value="21">Level 21</option>
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
                        this.state.stop && 
                        this.audio.currentTime == 0 &&
                        this.state.count == 1 &&
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
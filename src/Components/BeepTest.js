import React, {Component} from 'react'

class BeepTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            play: false,
            stop: true,
        }
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
        this.changeValues = this.changeValues.bind(this)
    }
    componentWillUnmount() {
        this.stop()
        this.props.audio.currentTime = 0;
    }
    start = () => {
        this.setState({
            play: true,
            stop: false,
        })
        this.props.audio.play()
    }

    stop = () => {
        this.props.audio.pause()
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
        this.props.audio.currentTime = 0;
        document.getElementById("select").selectedIndex = "0"
    }

    changeValues = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }, this.changeLevel(value))
    }
//  Find a way to bind the data for each option => single line code
    changeLevel(value) {
        switch(Number(value)) {
            case 1:
                this.props.audio.currentTime = 14;
                break;
            case 2:
                this.props.audio.currentTime = 77;
                break;;
            case 3:
                this.props.audio.currentTime = 141;
                break;
            case 4:
                this.props.audio.currentTime = 201;
                break;
            case 5:
                this.props.audio.currentTime = 264.5;
                break;
            case 6:
                this.props.audio.currentTime = 323;
                break;
            case 7:
                this.props.audio.currentTime = 395.2;
                break;
            case 8:
                this.props.audio.currentTime = 458;
                break;
            case 9:
                this.props.audio.currentTime = 520.5;
                break;
            case 10:
                this.props.audio.currentTime = 585.5;
                break;
            case 11:
                this.props.audio.currentTime = 645.5;
                break;
            case 12:
                this.props.audio.currentTime = 712;
                break;
            case 13:
                this.props.audio.currentTime = 779.1;
                break;
            case 14:
                this.props.audio.currentTime = 836.2;
                break;
            case 15:
                this.props.audio.currentTime = 900.8;
                break;
            case 16:
                this.props.audio.currentTime = 960.3;
                break;
            case 17:
                this.props.audio.currentTime = 1024;
                break;
            case 18:
                this.props.audio.currentTime = 1086.8;
                break;
            case 19:
                this.props.audio.currentTime = 1147.3;
                break;
            case 20:
                this.props.audio.currentTime = 1215.2;
                break;
            case 21:
                this.props.audio.currentTime = 1274.4;
                break;
            default:
                return null;
        }
    }
   
    render() {
        return(
            <div className="activeWindow">
                <h1 className="number">
                    {this.state.count}
                </h1>
                <select id="select" name="count" className="btn" onChange={this.changeValues}>
                    <option selected disabled default hidden style={{color: '#676A6F'}}>Select a level...</option>
                    <option value="1">Level 1</option>
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
                    <option value="20">Level 20</option>
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
                        this.props.audio.currentTime === 0 &&
                        this.state.count === 1 &&
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
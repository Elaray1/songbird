import React, {Component} from 'react';
import './style.css';
import ReactAudioPlayer from 'react-audio-player';

class BirdQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdAudio: '',
    }
    this.corsUrl = 'https://cors-anywhere.herokuapp.com/';
    this.audioRef = React.createRef();
  }
  render() {
    const birdsData = this.props.birdsData;
    if (this.props.birdName !== '*****') {
      this.rap.audioEl.pause();
    }
    return (
      <div className="jumbotron bird-question">
        <img src={this.props.birdImage} alt="bird" />
        <div>
          <p>{this.props.birdName}</p>
          <ReactAudioPlayer
            className="audio-player"
            src={birdsData[this.props.currentRound][this.props.randomNumber].audio}
            ref={(element) => { this.rap = element; }}
            controls
          />
        </div>
      </div>
    );
  }
}

export default BirdQuestion

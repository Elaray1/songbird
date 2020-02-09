import React, {Component} from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';
import AudioPlayer from 'react-h5-audio-player';

class BirdQuestion extends Component {
  render() {
    const birdsData = this.props.birdsData;
    if (this.props.birdName !== '*****') {
      this.player.audio.pause();
    }
    const Player = () => (
      <AudioPlayer
        className="audio-player"
        src={birdsData[this.props.currentRound][this.props.randomNumber].audio}
        ref={c => (this.player = c)}
      />
    );
    return (
      <div className="jumbotron bird-question">
        <img src={this.props.birdImage} alt="bird" />
        <div>
          <p>{this.props.birdName}</p>
          {Player()}
        </div>
      </div>
    );
  }
}

export default BirdQuestion

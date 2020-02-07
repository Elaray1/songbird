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
  }

  // birdVoiceAudio = (birdName) => {
  //   const url = `https://www.xeno-canto.org/api/2/recordings?query=${birdName}`;
  //   this.birdVoiceData(url);
  // }
  //
  // birdVoiceData = async (url) => {
  //   const data = await fetch(this.corsUrl + url).then((res) => res.json());
  //   this.setState({
  //     birdAudio: data.recordings[0].file,
  //   });
  //   console.log(data.recordings[0].file);
  //   return data.recordings[0].file;
  // }

  // componentDidMount() {
  //   this.birdVoiceAudio('penguin');
  // }

  render() {
    const birdsData = this.props.birdsData;
    return (
      <div className="jumbotron bird-question">
        <img src={this.props.birdImage} alt="bird" />
        <div>
          <p>{this.props.birdName}</p>
          <ReactAudioPlayer
            src={birdsData[this.props.currentRound][this.props.randomNumber].audio}
            controls
          />
        </div>
      </div>
    );
  }
}

export default BirdQuestion

import React, {Component} from 'react';
import './style.css';
import Header from '../Header/Header';
import BirdQuestion from '../BirdQuestion/BirdQuestion';
import BirdsList from '../BirdsList/BirdsList';
import GameEnd from '../GameEnd/GameEnd';
import '../../bootstrap.min.css';
import birdsData from './birdsData';
import birdImage from './question_bird.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: this.randomNumberFunction(birdsData[0].length),
      birdImage: birdImage,
      birdName: '*****',
      score: 0,
      currentRound: 0,
      maxScore: birdsData.length * birdsData[0].length - birdsData[0].length,
    }
  }

  randomNumberFunction = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  correctBirdName = (birdInfo) => {
    if (!birdInfo) {
      this.setState({
        birdImage: birdImage,
        birdName: '*****',
      });
      return;
    }
    this.setState({
      birdImage: birdInfo.image,
      birdName: birdInfo.name,
    });
  }

  changeScore = (counter) => {
    this.setState({
      score: this.state.score + counter,
    })
  }

  nextCurrentRound = () => {
    this.setState({
      currentRound: this.state.currentRound + 1,
      random: this.randomNumberFunction(birdsData[0].length),
    });
  }

  restartGame = () => {
    this.setState({
      random: this.randomNumberFunction(birdsData[0].length),
      birdImage: birdImage,
      birdName: '*****',
      score: 0,
      currentRound: 0,
    });
    [document.querySelector('.bird-question'), document.querySelector('.birds-content-wrapper'), document.querySelector('.next-lvl')].forEach((e) => {
      e.classList.remove('hide');
    });
    document.querySelector('.congrats-container').classList.add('hide');
    this.correctBirdName();
    document.querySelectorAll('.bird-element').forEach((e) => {
      e.firstChild.classList.remove("correct-answer");
      e.firstChild.classList.remove("incorrect-answer");
    });
    document.querySelector('.active').classList.remove("active");
    document.querySelector('.question-item').classList.add("active");
    document.querySelector('.next-lvl').firstChild.innerHTML = 'Следующий раунд';
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.score} />
        <BirdQuestion
          birdsData={birdsData}
          randomNumber={this.state.random}
          birdName={this.state.birdName}
          birdImage={this.state.birdImage}
          currentRound={this.state.currentRound}
        />
        <BirdsList
          birdsData={birdsData}
          randomNumber={this.state.random}
          correctBirdName={this.correctBirdName}
          changeScore={this.changeScore}
          currentRound={this.state.currentRound}
          nextCurrentRound={this.nextCurrentRound}
        />
        <GameEnd
          score={this.state.score}
          maxScore={this.state.maxScore}
          restartGame={this.restartGame}
        />
      </div>
    )
  }
}

export default App

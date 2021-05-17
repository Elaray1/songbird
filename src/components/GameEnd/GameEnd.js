import React, {Component} from 'react'
import './style.css';
import zerotwo from './zerotwo.gif';

class GameEnd extends Component {
  render() {
    const content = this.props.score === this.props.maxScore ?
        <div className="congrats-container hide">
          <h2 className="text-primary congrats">ВЫ ГЕНИЙ!</h2>
          <img src={zerotwo} alt="zerotwo"></img>
          <p>Хоть я и разрабатывал это приложение, но столько баллов не набирал... Наверное вы умеете разговаривать со птицами!</p>
          <p>Надеюсь программируете вы также хорошо, как знаете птичек ^_^</p>
        </div>
    :
       <div className="congrats-container hide">
          <h2 className="text-primary congrats">Поздравляем!</h2>
          <p>Вы набрали {this.props.score} из {this.props.maxScore} возможных!</p>
          <img src={zerotwo} alt="zerotwo"></img>
          <div className="try-again" onClick={this.props.restartGame}><p>Попробовать ещё раз!</p></div>
        </div>
    return (
      <div>{content}</div>
    );
  }
}


export default GameEnd;

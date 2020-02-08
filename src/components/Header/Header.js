import React, {Component} from 'react'
import './style.css';
import logo from './songbird.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="text-primary">
          <div className="logo">
            <img src={logo} width="350" alt="songbird_logo" />
          </div>
          <p className="score">Score: {this.props.score}</p>
        </div>
        <QuestionsList />
      </header>
    );
  }
}

class QuestionsList extends Component {
  render() {
    const questionArr = ['Разминка', 'Водоплавающие', 'Лесные', 'Всеядные', 'Хищные', 'Насекомоядные'];
    const questionItems = questionArr.map((question, index) =>
      <li className={index?"question-item":"question-item active"} key={index}>{question}</li>
    );
    return (
      <ul className="question-items">{questionItems}</ul>
    )
  }
}

export default Header

import React, {Component} from 'react'
import './style.css';
import logo from './songbird_logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    }
  }

  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="songbird_logo" />
        </div>
        <p className="score">Score: {this.state.score}</p>
      </header>
    );
  }
}

export default Header

import React, {Component} from 'react';
import './style.css';
import Header from '../Header/Header';
import '../../bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App

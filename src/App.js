import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    text: "foo",
    count: 0,
    time: 0
  }

  updateText(text) {
    const count = text.split(" ").length
    this.setState({
      text,
      count,
      time: count/200
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Word Counter YO</h1>
        </header>
        <textarea onChange={ (e) => this.updateText(e.target.value) } value={this.state.text}></textarea>
        <div>Word count: {this.state.count}</div>
        <div>Time to read: {this.state.time}</div>
      </div>
    );
  }
}

export default App;

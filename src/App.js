import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { text: "foo" }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Word Counter YO</h1>
        </header>
        <textarea onChange={ (e) => this.setState({ text: e.target.value }) } value={this.state.text}></textarea>
        <div>Word count: some Number</div>
        <div>Time to read: some sdfad</div>
      </div>
    );
  }
}

export default App;

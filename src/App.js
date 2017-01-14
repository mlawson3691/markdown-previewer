import React, { Component } from 'react';
import Markdown from './components/MarkdownComponent/App.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Markdown />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

var marked = require('marked');
marked.setOptions({
  sanitize: false
});

class Markdown extends Component {

  _handleChange(event) {
    document.getElementById('result').innerHTML = marked(event.target.value);
  }

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div id='input'>
          <h2>Insert your markdown here:</h2>
          <form>
            <textarea id='markdown' onChange={this._handleChange.bind(this)}></textarea>
          </form>
        </div>
        <div id='output'>
          <h2>Result:</h2>
          <p id='result'></p>
        </div>
      </div>
    );
  }
}

export default Markdown;

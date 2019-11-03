import React, { Component } from 'react';
import './App.css';
import NewProgressionContainer from './progressions/NewProgressionContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <NewProgressionContainer />
        </div>
      </div>
    )
  }

}

export default App;

import React, { Component } from 'react';
import VideoSearchContainer from '../videos/VideoSearchContainer'
import Progression from './Progression'
import './Progression.css';

class NewProgressionContainer extends Component {

  state = {
    currProgression: []
  }

  addToProgression = (video) => {
    debugger
    this.setState({
      currProgression: [...this.state.currProgression, video]
    })
  }

  render(){
    return (
      <div className="new-progression-container">
        <Progression currProgression={this.state.currProgression} />
        <VideoSearchContainer addToProgression={this.addToProgression} />
      </div>
    )
  }


}

export default NewProgressionContainer

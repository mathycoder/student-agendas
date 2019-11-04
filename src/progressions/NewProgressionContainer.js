import React, { Component } from 'react';
import VideoSearchContainer from '../videos/VideoSearchContainer'
import NewProgressionMenuBar from './NewProgressionMenuBar'
import Progression from './Progression'
import './Progression.css';

class NewProgressionContainer extends Component {

  state = {
    currProgression: [],
    menuSelect: ""
  }

  addToProgression = (video) => {
    this.setState({
      ...this.state,
      currProgression: [...this.state.currProgression, video]
    })
  }

  handleMenuClick = (event) => {
    this.setState({
      ...this.state,
      currProgression: [...this.state.currProgression],
      menuSelect: event.target.innerText
    })
  }

  render(){
    return (
      <div className="new-progression-container">
        <Progression currProgression={this.state.currProgression} />
        <NewProgressionMenuBar handleMenuClick={this.handleMenuClick} menuSelect={this.state.menuSelect}/>
        {this.state.menuSelect === "Add YouTube Video" ? <VideoSearchContainer addToProgression={this.addToProgression} /> : ''}
      </div>
    )
  }
}

export default NewProgressionContainer

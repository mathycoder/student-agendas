import React, { Component } from 'react';
import VideoSearchContainer from '../videos/VideoSearchContainer'
import Progression from './Progression'
import './Progression.css';

class NewProgressionContainer extends Component {

  render(){
    return (
      <div className="new-progression-container">
        <Progression />
        <VideoSearchContainer />
      </div>
    )
  }


}

export default NewProgressionContainer

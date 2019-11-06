import React, { Component } from 'react';
import './Progression.css';
import ProgressionItem from './ProgressionItem'

class Progression extends Component {

  displayProgression = () => {
    return (
      this.props.currProgression.map((video, index) => {
        return <ProgressionItem video={video}
          index={index}
          removeFromProgression={this.props.removeFromProgression}
          handleProgressionItemClick={this.props.handleProgressionItemClick}
          />
      })
    )
  }

  render(){
    return (
      <div className="progression" onDragOver={this.props.handleDragOver} onDragLeave={this.props.handleDragLeave} onDrop={this.props.handleOnDrop} >
        {this.displayProgression()}
      </div>
    )
  }
}

export default Progression

import React, { Component } from 'react';
import './Progression.css';

class Progression extends Component {

  displayProgression = () => {
    return (
      this.props.currProgression.map((video, index) => {
        const parser = new DOMParser()
        let title = parser.parseFromString('<!doctype html><body>' + video.snippet.title, 'text/html')
        title = title.body.textContent
        return (
          <div className="progression-item" onClick={event => this.props.handleProgressionItemClick(index)}>
            <h4>{title}</h4><br/>
            <img width="180px" src={video.snippet.thumbnails.medium.url} alt="learning video" />
          </div>
        )
      })
    )
  }

  render(){
    return (
      <div className="progression" onDragOver={this.props.handleDragOver} onDrop={this.props.handleOnDrop} >
        {this.displayProgression()}
      </div>
    )
  }

}

export default Progression

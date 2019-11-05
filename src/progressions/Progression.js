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
          <div>
            <div className="x-out" onClick={(event) => this.props.removeFromProgression(video)}>x</div>
            <div className="progression-item" onClick={event => this.props.handleProgressionItemClick(index)}>
              <img width="180px" src={video.snippet.thumbnails.medium.url} alt="learning video" />
              <br/>
              <div className="progression-item-title">{title}</div>
            </div>
          </div>
        )
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

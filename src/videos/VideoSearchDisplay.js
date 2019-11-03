import React, { Component } from 'react';
import './VideoSearch.css';

class VideoSearchDisplay extends Component {

  state = {
    videoIndex: ""
  }

  componentDidUpdate(){
    console.log(this.props.videos)
  }

  displayDate = () => {
    const video = this.props.videos[this.state.videoIndex]
    const date = new Date(video.snippet.publishedAt)
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  }

  displayTitle = () => {
    const video = this.props.videos[this.state.videoIndex]
    const parser = new DOMParser
    let title = parser.parseFromString('<!doctype html><body>' + video.snippet.title, 'text/html')
    return title.body.textContent
  }

  displayPreview = () => {
    const video = this.props.videos[this.state.videoIndex]
    const url = 'http://www.youtube.com/embed/' + video.id.videoId

    return (
      <div className="search-video-preview">
        <h4>{this.displayTitle()}</h4><br />
        <h6>
          Created by {video.snippet.channelTitle} on {this.displayDate()}
        </h6>
        <iframe id="player" type="text/html" width="400" height="250" src={url} frameBorder="0"></iframe>
        <p>{video.snippet.description}</p>
        <button onClick={(event) => this.props.addToProgression(video)}>Add to Progression</button>
      </div>
    )
  }

  handleVideoClick = (index) => {
    this.setState({videoIndex: index})
  }

  displayVideos = () => {
    return this.props.videos.slice(0,10).map((video, index) => {
      const parser = new DOMParser
      let title = parser.parseFromString('<!doctype html><body>' + video.snippet.title, 'text/html')
      title = title.body.textContent
      return (
        <div className="search-video" key={index} onClick={(event) => this.handleVideoClick(index)}>
          <h4>{title}</h4>
          <img src={video.snippet.thumbnails.medium.url} />
          <p>{video.snippet.description}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="search-videos-container">
        <div className="search-videos">
          {this.displayVideos()}
        </div>
        {this.state.videoIndex !== "" ? this.displayPreview() : ''}
      </div>
    )
  }
}

export default VideoSearchDisplay

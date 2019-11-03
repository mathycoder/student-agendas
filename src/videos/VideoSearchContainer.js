import React, { Component } from 'react';
import VideoSearchDisplay from './VideoSearchDisplay'

const YOUTUBE_API_KEY = 'AIzaSyB5XRdK1vbRRW-XUG7yKe1V5GH86KAOuJ4'
const URL1 = 'https://www.googleapis.com/youtube/v3/search'
const URL2 = `?key=${YOUTUBE_API_KEY}&part=snippet&safeSearch=strict&type=video&videoEmbeddable=true&maxResults=50`

class VideoSearchContainer extends Component {

  state = {
    videos: [],
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState({
      videos: this.state.videos,
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.searchTerm)
    fetch(URL1 + URL2 + `&q=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          videos: json.items,
          searchTerm: ""
        })
      })
  }

  render() {
    return (
      <div className="searched-videos-display">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
          <input type="submit" value="Search"/>
        </form>
        <VideoSearchDisplay videos={this.state.videos}/>
      </div>
    )
  }

}

export default VideoSearchContainer

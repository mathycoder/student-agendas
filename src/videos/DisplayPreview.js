import React from 'react'
import './VideoSearch.css';

function displayDate(video){
  const date = new Date(video.snippet.publishedAt)
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const month = MONTHS[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

function displayTitle(video) {
  const parser = new DOMParser()
  let title = parser.parseFromString('<!doctype html><body>' + video.snippet.title, 'text/html')
  return title.body.textContent
}

const DisplayPreview = (props) => {
  const url = 'http://www.youtube.com/embed/' + props.video.id.videoId
  return (
    <div className="search-video-preview" >
      <h4>{displayTitle(props.video)}</h4><br />
      <h6>
        Created by {props.video.snippet.channelTitle} on {displayDate(props.video)}
      </h6>
      <br/>
      <iframe title="video preview" id="player" type="text/html" width="360" height="220" src={url} frameBorder="0"></iframe>
      <p>{props.video.snippet.description}</p>
      {props.addToProgression ? <button onClick={(event) => props.addToProgression(props.video)}>Add to Progression</button> : ''}
      {props.removeFromProgression ? <button onClick={(event) => props.removeFromProgression(props.video)}>Remove from Progression</button> : ''}
    </div>
  )
}

export default DisplayPreview

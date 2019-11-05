import React from 'react';
import './VideoSearch.css';

function formatTitle(unformattedTitle){
  const parser = new DOMParser()
  let title = parser.parseFromString('<!doctype html><body>' + unformattedTitle, 'text/html')
  return title.body.textContent
}

function displayDate(video){
  const date = new Date(video.snippet.publishedAt)
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const month = MONTHS[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

const DisplaySearchResults = (props) => {
  return (
    <div className="search-videos">
      {props.videos.slice(0,24).map((video, index) => {
        const title = formatTitle(video.snippet.title)
        return (
          <div draggable onDragStart={event => props.handleDragStart(event, video)} className="search-video" key={index} onClick={(event) => props.handleVideoClick(index)}>
            <img alt="searched video result" src={video.snippet.thumbnails.medium.url} />
            <div className="title-text">{title}</div>
            <div className="creator-text">by {video.snippet.channelTitle}</div>
            <div className="created-date">{displayDate(video)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default DisplaySearchResults

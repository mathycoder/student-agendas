import React, { Component } from 'react';
import './VideoSearch.css';

function formatTitle(unformattedTitle){
  const parser = new DOMParser
  const title = parser.parseFromString('<!doctype html><body>' + unformattedTitle, 'text/html')
  return title.body.textContent
}

const DisplaySearchResults = (props) => {
  return (
    <div className="search-videos">
      {props.videos.slice(0,10).map((video, index) => {
        const title = formatTitle(video.snippet.title)
        return (
          <div className="search-video" key={index} onClick={(event) => props.handleVideoClick(index)}>
            <h4>{title}</h4>
            <img src={video.snippet.thumbnails.medium.url} />
            <p>{video.snippet.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default DisplaySearchResults

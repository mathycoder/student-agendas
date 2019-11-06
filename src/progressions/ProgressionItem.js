import React from 'react'

const ProgressionItem = (props) => {
  const parser = new DOMParser()
  let title = parser.parseFromString('<!doctype html><body>' + props.video.snippet.title, 'text/html')
  title = title.body.textContent
  return (
    <div ref={node => props.innerRef(node)} className="progression-item-container">
      <div className="x-out" onClick={(event) => props.removeFromProgression(props.video)}>x</div>
      <div className="progression-item" id={`item-${props.video.id.videoId}`} onClick={event => props.handleProgressionItemClick(props.index)}>
        <img width="180px" src={props.video.snippet.thumbnails.medium.url} alt="learning video" />
        <br/>
        <div className="progression-item-title">{title}</div>
      </div>
    </div>
  )
}

export default ProgressionItem

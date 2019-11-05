import React, { Component } from 'react';
import VideoSearchContainer from '../videos/VideoSearchContainer'
import NewProgressionMenuBar from './NewProgressionMenuBar'
import Progression from './Progression'
import DisplayPreview from '../videos/DisplayPreview'
import './Progression.css';

class NewProgressionContainer extends Component {

  state = {
    currProgression: [],
    menuSelect: "Add YouTube Video",
    selectedIndex: ""
  }

  handleDragOver = event => {
    event.preventDefault()
    document.querySelector('.progression').classList.add("drag-over-progression")
  }

  handleDragLeave = event => {
    event.preventDefault()
    document.querySelector('.progression').classList.remove("drag-over-progression")
  }

  handleDragStart = (event, video) => {
    let data = JSON.stringify(video)
    event.dataTransfer.setData("video", data)
  }

  handleOnDrop = (event) => {
    let video = event.dataTransfer.getData("video")
    video = JSON.parse(video)
    this.setState({
      ...this.state,
      currProgression: [...this.state.currProgression, video],
      draggedItem: {...this.state.draggedItem}
    })
    document.querySelector('.progression').classList.remove("drag-over-progression")
  }

  addToProgression = (video) => {
    this.setState({
      ...this.state,
      currProgression: [...this.state.currProgression, video],
      draggedItem: {...this.state.draggedItem}
    })
  }

  handleProgressionItemClick = index => {
    this.setState({
      ...this.state,
      currProgression: [...this.state.currProgression],
      selectedIndex: index,
      menuSelect: "Edit Progression"
    })
  }

  handleMenuClick = (event) => {
    const index = event.target.innerText === "Edit Progression" && this.state.currProgression.length > 0 ? 0 : ""
    this.setState({
      ...this.state,
      selectedIndex: index,
      currProgression: [...this.state.currProgression],
      menuSelect: event.target.innerText
    })
  }

  removeFromProgression = (movie) => {
    this.setState({
      ...this.state,
      currProgression: this.state.currProgression.filter(item => item !== movie),
      menuSelect: "",
      selectedIndex: ""
    })
  }

  progressionEmpty = () => {
    return this.state.currProgression.length > 0 ? false : true
  }

  render(){
    return (
      <div className="new-progression-container">
        <Progression removeFromProgression={this.removeFromProgression} currProgression={this.state.currProgression} handleProgressionItemClick={this.handleProgressionItemClick} handleDragOver={this.handleDragOver} handleDragLeave={this.handleDragLeave} handleOnDrop={this.handleOnDrop} />
        <NewProgressionMenuBar handleMenuClick={this.handleMenuClick} menuSelect={this.state.menuSelect} progressionEmpty={this.progressionEmpty}/>
        {this.state.menuSelect === "Edit Progression" && this.state.selectedIndex !== '' ? <DisplayPreview video={this.state.currProgression[this.state.selectedIndex]} removeFromProgression={this.removeFromProgression}/> : ''}
        {this.state.menuSelect === "Add YouTube Video" ? <VideoSearchContainer addToProgression={this.addToProgression} handleDragStart={this.handleDragStart} /> : ''}
      </div>
    )
  }
}

export default NewProgressionContainer

import React, { Component } from 'react'
import "./Task.css"

class Task extends Component {
  render() {
    const {tasks} = this.props
    return (
    <>
      {tasks.map((task)=>
      <div className="row">
        <li>{task}</li>
        <button>DEL</button>
        <button>EDIT</button> 
      </div>
      )}
    </>
    )
  }
}

export default Task

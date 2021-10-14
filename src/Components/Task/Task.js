import React, { Component } from 'react'
import DelBtn from '../Buttons/DelBtn'
import "./Task.css"

class Task extends Component {
  render() {
    const {task, tasks} = this.props
    return (
    
      
      <div className="row" >
        <li>{task}</li>
        <DelBtn tasks={tasks}/>
        <button>EDIT</button> 
      </div>

      
    
    )
  }
}

export default Task

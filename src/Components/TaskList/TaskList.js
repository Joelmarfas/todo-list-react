import React, { Component } from 'react'

class TaskList extends Component {
  render() {
    const {tasks} = this.props
    return (
      <ul>
          {tasks.map((task)=>
            <li>{task}</li>
          )}

      </ul>
    )
  }
}

export default TaskList

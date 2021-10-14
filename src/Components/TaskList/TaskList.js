import React, { Component } from 'react'
import Task from '../Task/Task'

class TaskList extends Component {
  render() {
    const {tasks} = this.props
    return (
      <ul>
          <Task tasks={tasks}/>
      </ul>
    )
  }
}

export default TaskList

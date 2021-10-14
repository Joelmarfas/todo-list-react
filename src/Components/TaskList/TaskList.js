import React, { Component } from 'react'
import uuid from 'react-uuid'
import Task from '../Task/Task'

class TaskList extends Component {
  render() {
    const {tasks} = this.props
    return (
      <ul>
        {tasks.map((task)=>
          <Task tasks={tasks} task={task} key={uuid()}/>
          )}
      </ul>
    )
  }
}

export default TaskList

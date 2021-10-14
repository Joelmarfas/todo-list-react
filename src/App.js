import React, { Component } from 'react'
import './App.css';
import Form from './Components/Form/Form';
import TaskList from './Components/TaskList/TaskList';

 class App extends Component {
   constructor(props) {
     super(props)
     this.state = {
       tasks: [],
     }

this.handleInput = this.handleInput.bind(this)
   }
 
handleInput(newTask) {
  this.setState({

    tasks: [...this.state.tasks, newTask]
  }
    )
}

  render() {
    const {tasks} = this.state
    return (
      <main>
      <h1>TODO LIST</h1>
        <Form handleInput={this.handleInput}/>
      <div>
        <TaskList tasks={tasks} />
      </div>
    </main>
    )
  }
}

export default App



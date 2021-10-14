import React, { Component } from 'react'

class Form extends Component {
 constructor(props) {
   super(props)

   this.state = {
     input: "",
     tasks: ["task1", "task3"],
   }

   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)

 }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
  e.preventDefault()
   console.log(this.state.input)
   const taskTextInput = this.state.input
   const taskList = this.state.tasks
this.setState ({
  tasks: [...taskList, taskTextInput],
})

 }
  render() {
  
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add task" onChange={this.handleChange}/>
        <button>Add</button>
      </form>
    )
  }
}

export default Form

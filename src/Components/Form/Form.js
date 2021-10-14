import React, { Component } from 'react'

class Form extends Component {
 constructor(props) {
   super(props)

   this.state = {
     input: "",
    //  tasks: [],
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


this.props.handleInput(taskTextInput)

this.setState({
  input:""
})

 }
  render() {
  const {tasks} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add task" onChange={this.handleChange} value={this.state.input}/>
        <button>Add</button>
        <div>{tasks}</div>
      </form>
    )
  }
}

export default Form

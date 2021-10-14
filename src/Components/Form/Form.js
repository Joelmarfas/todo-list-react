import React, { Component } from 'react'

class Form extends Component {
 constructor(props) {
   super(props)

   this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)

 }

handleSubmit(e) {
  e.preventDefault()
   console.log("It works")
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add task" onChange={(e)=>{console.log(e.target.value)}}/>
        <button>Add</button>
      </form>
    )
  }
}

export default Form

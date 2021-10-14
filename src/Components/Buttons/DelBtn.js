import React, { Component } from 'react'

class DelBtn extends Component {

constructor(props) {
  super(props)
console.log(this.props.tasks)
  this.state = {
    
  }
}
delete() {
  
  console.log("borrar")
  // const deleted = this.props.tasks
  // console.log(deleted)
  
  
}

  render() {
    return (
      <button onClick={this.delete} >DEL</button>
    )
  }
}

export default DelBtn

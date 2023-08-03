import React, { Component } from 'react'
//EVent Handling in Class Component
class ClassClick extends Component {

    clickHandler(){
        console.log('Clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}
export default ClassClick

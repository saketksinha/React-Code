import React from 'react'
// Event Handling in fuction component
function FunctionClick() {

function clickHandler(){
        console.log('Button Clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
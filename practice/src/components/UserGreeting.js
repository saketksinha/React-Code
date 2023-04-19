import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    //short circuit operator approach
    return this.state.isLoggedIn && <div>Welcome Saket</div>

    //ternary operator
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Saket</div> :
    //     <div>Welcome Guest</div>
    // )

    //element variable approach
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Saket</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>



    //if-else condition
    // if (this.state.isLoggedIn){
    //     return <div>Welcome Saket</div>
    // }else{
    //    return <div>Welcome Guest</div>
    // }
    // return (
    //     <div>
    //         <div>Welcome Saket</div>
    //         <div>Welcome Guest</div>
    //     </div>
      
    // )
  }
}

export default UserGreeting
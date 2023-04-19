// Class component

import React, {Component} from 'react'

//using props in class component

//Destructring props
class Welcome extends Component{
    render(){
        const{name, heroName} = this.props
        //const {state1, state2} =this.state
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome
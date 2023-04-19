// functional Component
// props are immutable
import React from 'react'

// function Greet(){
//     return <h1>Hello Saket</h1>
// }

// with arrow function using ES6
// using props with functional Component

// const Greet = props => {
//     return(
//         <div>
//             <h1>
//             Hello {props.name} a.k.a {props.heroName}
//             </h1>
//         </div>
//     )
// } 

// Destructuring props
// 1st method
// const Greet = ({name, heroName}) => {
//         return(
//             <div>
//                 <h1>
//                 Hello {name} a.k.a {heroName}
//                 </h1>
//             </div>
//         )
//     }
    
// 2nd method

 const Greet = props => {
    const {name, heroName} = props
        return(
            <div>
                <h1>
                Hello {name} a.k.a {heroName}
                </h1>
            </div>
        )
    } 

export default Greet;
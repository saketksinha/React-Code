import React from 'react'

const Hello =() => {

    //using JSX
    // return (
    //     <div>
    //        <h1> hello Saket</h1>
    //     </div>
    // )

    //Without using JSX

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1',null, 'JSX Example'))
}

export default Hello
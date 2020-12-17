import React from 'react'

// 1. is a function
// 2. first alphabet is uppercase
// 3. return JSX
export default function ImageFrame(){
    return <img  src={require('./dog.gif').default}/>
}

import React from 'react'

function sayHello() {
    return "hello";
}

function sayGoodbye() {
    return <h2>Time to say goodbye</h2>
}

function BorderedImageFrame(){
    return (
        <img style={{'border':'4px solid red'}} src={require('./pikachu.png').default}/>
    )
}

// 1. is a function
// 2. first alphabet is uppercase
// 3. return JSX
function ImageFrame(){
    return <img  src={require('./dog.gif').default}/>
}

function App() {
  return (
   <React.Fragment>
        <h1>{sayHello()}</h1>
        {sayGoodbye()}
        <ImageFrame/>
        <BorderedImageFrame/>
   </React.Fragment>

  );
}

export default App;

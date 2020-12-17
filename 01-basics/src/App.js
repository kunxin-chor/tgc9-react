import React from 'react'
import actor from './actor.jpg'
import './styles.css'

function App() {
    return (
        <React.Fragment>
            <h1>Hello World</h1>
            <p style={{
                'color':'red',
                'fontSize':'32px'

            }}>'tis seaason to be jolly la la la la!</p>
            <a href="http://www.google.com">Google</a>
            <p>3 + 3 = {3+3}</p>
            <p className="highlight">Random number = {Math.floor(Math.random() * 6)  + 1}</p>
            <img src={actor} alt="Castle"/>
            <img src={require('./actor.jpg').default}/>
       </React.Fragment>
    )
}

export default App;

import React from 'react'

// all class-based components extending from React.Component
// must have a render function
export default class NumberBox extends React.Component{
    
    // the state attribute name MUST be called state
    // this holds all the state variables
    state = {
        number: this.props.startingNumber
    }
    
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.state.number}</h1>
                </div>
                <button onClick={this.increment}>Add 1</button>
            </React.Fragment>
        )
    }

    // must use arrow functions for event callbacks
    increment = ()=> {
        // the only way to change the variable
        // in the state to use the .setState function
        // this is an ASYNC function
        this.setState({
            number: this.state.number + 1
        })
    }
}
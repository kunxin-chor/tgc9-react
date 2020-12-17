import React from 'react';

export default class Counter extends React.Component {



    state = {
        count: 0
    }
    render(){

        let counterStyle = {
            'border':'4px solid black',
            'fontSize':'32px',
            'height':'60px',
            'wdith':'60px',
            'padding':'30px'
        };
        return (
            <React.Fragment>
                <div style={counterStyle}>
                    {this.state.count}
                </div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>Decrement</button>
            </React.Fragment>
        )
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}
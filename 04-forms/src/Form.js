import React from 'react'

export default class Form extends React.Component {
    state = {
        'name':"",
        'email':"",
        'color':'',
        'time':'morning',
        'fruits':[]
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.updateName}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={this.updateEmail}/>
            </div>
            <div>
                <label>Favourite Color</label>
                <input type="radio" name="color" value="red" onChange={this.updateColor}/><label>Red</label>
                <input type="radio" name="color" value="green" onchange={this.updateColor}/><label>Green</label>
                <input type="radio" name="color" value="blue" onChange={this.updateColor}/><label>Blue</label>
            </div>
            <div>
                <label>Favorite time of the day (morning, afternoon, evening, early morning)</label>
                <input type="radio" name="time" value="morning" onChange={this.updateTime}/><label>Morning</label>
                <input type="radio" name="time" value="afternoon" onChange={this.updateTime}/><label>Afternoon</label>
                <input type="radio" name="time" value="evening" onChange={this.updateTime}/><label>Evening</label>
                <input type="radio" name="time" value="early-morning" onChange={this.updateTime}/><label>Early Morning</label>
            </div>

            </React.Fragment>
        );
    }

    updateColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updateTime = (event) => {
        this.setState({
            time: event.target.value
        })
    }


}
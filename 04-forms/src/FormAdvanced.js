import React from "react";

export default class FormAdvanced extends React.Component {
  state = {
    name: "",
    email: "",
    color: "",
    time: "morning",
    fruits: []
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Favourite Color</label>
          <input
            type="radio"
            name="color"
            value="red"
            onChange={this.updateFormField}
            checked={this.state.color === "red"}
          />
          <label>Red</label>
          <input
            type="radio"
            name="color"
            value="green"
            onChange={this.updateFormField}
            checked={this.state.color === "green"}
          />
          <label>Green</label>
          <input
            type="radio"
            name="color"
            value="blue"
            onChange={this.updateFormField}
            checked={this.state.color === "blue"}
          />
          <label>Blue</label>
        </div>
        <div>
          <label>
            Favorite time of the day (morning, afternoon, evening, early
            morning)
          </label>
          <input
            type="radio"
            name="time"
            value="morning"
            onChange={this.updateFormField}
            checked={this.state.time === "morning"}
          />
          <label>Morning</label>
          <input
            type="radio"
            name="time"
            value="afternoon"
            onChange={this.updateFormField}
            checked={this.state.time === "afternoon"}
          />
          <label>Afternoon</label>
          <input
            type="radio"
            name="time"
            value="evening"
            onChange={this.updateFormField}
            checked={this.state.time === "evening"}
          />
          <label>Evening</label>
          <input
            type="radio"
            name="time"
            value="early-morning"
            onChange={this.updateFormField}
            checked={this.state.time === "early-morning"}
          />
          <label>Early Morning</label>
        </div>
        <div>
          <label>Favorite Fruits</label>
          <input
            type="checkbox"
            name="fruits"
            value="orange"
            onChange={this.updateFruits}
            checked={this.state.fruits.includes('orange')}
          />
          <label>Orange</label>
          <input
            type="checkbox"
            name="fruits"
            value="apple"
            onChange={this.updateFruits}
            checked={this.state.fruits.includes('apple')}
          />
          <label>Apple</label>
          <input
            type="checkbox"
            name="fruits"
            value="mango"
            onChange={this.updateFruits}
            checked={this.state.fruits.includes('mango')}
          />
          <label>Mango</label>
        </div>
      </React.Fragment>
    );
  }

  updateFruits = event => {
    // make a copy of the old array, and add the new value at the back
    //    let copy = [...this.state.fruits, event.target.value];

    if (!this.state.fruits.includes(event.target.value)) {
      //let copy = this.state.fruits.slice();
      // copy.push(event.target.value);
      let copy = [...this.state.fruits, event.target.value];
      this.setState({
        fruits: copy
      });
    } else {
        // if the user clicks a checkbox when its value is already in the array
        // then it means we have to remove from the array
        let copy = this.state.fruits.filter((eachFruit)=>{
            // only keep the fruits that DOES NOT match what I want to delete
            return eachFruit !== event.target.value
        })
        this.setState({
            'fruits': copy
        })
    }
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}

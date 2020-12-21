import React from "react";

// creates a class-based component
export default class BookingForm extends React.Component {
  state = {
    name: "",
    age: "teens",
    classes: []
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateFormField}
            name="name"
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="radio"
            name="age"
            value="teens"
            onChange={this.updateFormField}
            checked={this.state.age === "teens"}
          />
          <label>18 or younger</label>
          <input
            type="radio"
            name="age"
            value="young-adults"
            onChange={this.updateFormField}
            checked={this.state.age === "young-adults"}
          />
          <label>19 to 34</label>
          <input
            type="radio"
            name="age"
            value="adults"
            onChange={this.updateFormField}
            checked={this.state.age === "adults"}
          />
          <label>35 to 49</label>
          <input
            type="radio"
            name="age"
            value="senior"
            onChange={this.updateFormField}
            checked={this.state.age === "senior"}
          />
          <label>50+</label>
        </div>
        <div>
          <label>Classes</label>
          <input
            type="checkbox"
            name="classes"
            value="yoga"
            onChange={this.updateCheckboxes}
            checked={this.state.classes.includes('yoga')}
          />
          <label>Yoga</label>
          <input
            type="checkbox"
            name="classes"
            value="shadow-boxing"
            onChange={this.updateCheckboxes}
            checked={this.state.classes.includes('shadow-boxing')}
          />
          <label>Shadow Boxing</label>
          <input
            type="checkbox"
            name="classes"
            value="zumba"
            onChange={this.updateCheckboxes}
            checked = {this.state.classes.includes('zumba')}
          />
          <label>Zumba</label>
        </div>
      </React.Fragment>
    );
  }

  // the event object is passed to updateFormField by react when it detects a change in the form control
  updateFormField = event => {
    // event.target refers to the form control that is being changed
    // event.target.name is the name attribute of that form control
    // event.target.value is the value inside that form control
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCheckboxes = event => {
    // the flow to change array is:
    // 1. make a copy of the array
    // 2. make the changes to the COPY
    // 3. use setState to update the original state variable that points to the array

    // case 1: adding a new checked class (the class wasn't selected before and now is selected)
    // step 1 clone (make a copy) of the array
    //   let copy = [...this.state.classes];

    //   // step 2 : change the  cloned  array
    //   copy.push(event.target.value);

    //   // step 3: set the cloned array into the state, overwriting the original array
    //   this.setState({
    //     classes: copy
    //   })

    // case 1: adding a new checked class to the array
    if (this.state.classes.includes(event.target.value) === false) {
      this.setState({
        classes: [...this.state.classes, event.target.value]
      });
    } else {
      // case 2: if the selected class is in already the classes array, remove
      let cloned = this.state.classes.filter(c => {
        return c !== event.target.value;
      });
      this.setState({
        classes: cloned
      });
    }
  };
}

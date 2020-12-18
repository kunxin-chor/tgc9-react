import React from "react";

class SurveyForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "support",
    country: "sg",
    contactBy: []
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Type of enquiry</label>
          <input
            type="radio"
            value="support"
            onChange={this.updateFormField}
            name="enquiry"
            checked={this.state.enquiry === "support"}
          />
          <label>Support</label>
          <input
            type="radio"
            value="sales"
            onChange={this.updateFormField}
            name="enquiry"
            checked={this.state.enquiry === "sales"}
          />
          <label>Sales</label>
          <input
            type="radio"
            value="marketing"
            onChange={this.updateFormField}
            name="enquiry"
            checked={this.state.enquiry === "marketing"}
          />
          <label>Marketing</label>
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateFormField}
          >
            <option value="sg">Singapore</option>
            <option value="my">Malaysia</option>
            <option value="in">Indonesia</option>
            <option value="th">Thailand</option>
          </select>
        </div>
        <div>
        
          <label>How to contact you</label>
          <input
            type="checkbox"
            name="contactBy"
            value="slow-mail"
            onChange={this.updateCheckboxes}
          />
          <label>Slow Mail</label>
       
        { /* this is the email checkbox */}
        <input type="checkbox"
         name="contactBy"
         value="email"
         onChange={this.updateCheckboxes}
         />
         <label>Email</label>
        
        <input type="checkbox"
            name="contactBy"
            value="phone"
            onChange={this.updateCheckboxes}
        />
        <label>Phone</label>
        
        </div>
        <button onClick={this.submitForm}>Submit</button>
      </React.Fragment>
    );
  }

  updateFormField = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  updateCheckboxes = evt => {
    let originalArray = this.state[evt.target.name];

    // check if the value of the checkbox that the user has clicked on is in the array or not
    if (!originalArray.includes(evt.target.value)) {
        // the checkbox's value is not in the array, so we add it to the array
        let modified = [...originalArray, evt.target.value];
        this.setState({
            [evt.target.name] : modified
        })
    } else {
        // the checkbox's value is already in the array, so this means we should remove it
        let modified = originalArray.filter((eachItem)=>{
            // only keep items that DOES NOT match the checkbox's value ('cos we are going to delete it from the array)
            return eachItem !== evt.target.value;
        })
        this.setState({
            [evt.target.name] : modified
        })
    }
  }

  submitForm() {
    alert(
      `First name = ${this.state.firstName}, Last name = ${this.state.lastName}, Enquiry = ${this.state.eqnuiry}`
    );
  }
}

export default SurveyForm;

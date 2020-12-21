import React from "react";

class SurveyForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "support",
    country: "sg",
    contactBy: []
  };

  typeOfEnquiries = [
    {
      id: 1,
      value: "support",
      title: "Support"
    },
    {
      id: 2,
      value: "sales",
      title: "Sales"
    },
    {
      id: 3,
      value: "marketing",
      title: "Marketing"
    },
    {
        id: 4,
        value: "missing-deliveries",
        title:"Missing deliveries"
    }
  ];

  countries = [
      {
          'id': 1,
          'value': 'sg',
          'title': 'Singapore'
      },
      {
          'id': 2,
          'value':'ma',
          'title':'Malaysia'
      },
      {
          'id': 3,
          'value':'th',
          'title':'Thailand'
      }
  ]

  contactMethods = [

    {
        id: 1,
        value:'slow-mail',
        title:'Singpost Slow Mail'
    },

    {
        id: 2,
        value:'phone',
        title:'Phone Number'
    },
    {
        id: 3,
        value:'email',
        title:'Email'
    },
    {
        id: 4,
        value: 'instant-messenging',
        title: "Whatsapp, wechat, Telegram etc."
    }

  ]

  renderSelectSupport() {
    let jsx = [];
    for (let supportType of this.typeOfEnquiries) {
      jsx.push(
        <React.Fragment>
          <input
            type="radio"
            value={supportType.value}
            onChange={this.updateFormField}
            name="enquiry"
            checked={this.state.enquiry === supportType.value}
          />
          <label>{supportType.title}</label>
        </React.Fragment>
      );
    }
    return jsx;
  }

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
           { this.renderSelectSupport() }
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateFormField}
          >
              {
                  this.countries.map( (c,index) => <option value={c.value} key={index}>{c.title}</option>)
              }

          </select>
        </div>
        <div>
          <label>How to contact you</label>
           {
            this.contactMethods.map( (c,index)=>{
                return (
                    <React.Fragment>
                        <input
                        type="checkbox"
                        name="contactBy"
                        value={c.value}
                        onChange={this.updateCheckboxes}
                        checked={this.state.contactBy.includes(c.value)}
                    />
                    <label>{c.title}</label>     
                    </React.Fragment>
                )
            })
           }
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
        [evt.target.name]: modified
      });
    } else {
      // the checkbox's value is already in the array, so this means we should remove it
      let modified = originalArray.filter(eachItem => {
        // only keep items that DOES NOT match the checkbox's value ('cos we are going to delete it from the array)
        return eachItem !== evt.target.value;
      });
      this.setState({
        [evt.target.name]: modified
      });
    }
  };

  submitForm() {
    alert(
      `First name = ${this.state.firstName}, Last name = ${this.state.lastName}, Enquiry = ${this.state.eqnuiry}`
    );
  }
}

export default SurveyForm;

import React from "react";
import axios from "axios";

class Reservation extends React.Component {


  state = {
    appetizers: [],
    smokingChoice: "non-smoking",
    seating: "indoors",
    firstName: "",
    lastName: "",
    settings: {
        seatings: [],
        smokingChoices:[],
        appetizers:[]

    }
  };

  async componentDidMount() {
      let response = await axios.get('reservation-settings.json');
      this.setState({
          settings: response.data
      })
  }

  renderSeatingOptions() {
    let jsx = [];
    for (let option of this.state.settings.seatings) {
      jsx.push(
        <React.Fragment key={option.id}>
          <input
            type="radio"
            value={option.value}
            name="seating"
            onChange={this.updateField}
            checked={option.value === this.state.seating}
          />
          <label>{option.title}</label>
        </React.Fragment>
      );
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label>Seatings</label>
          {this.renderSeatingOptions()}
        </div>
        <div>
          <label>Smokimg</label>
          <select
            name="smokingChoice"
            value={this.state.smokingChoice}
            onChange={this.updateField}
          >
            {this.state.settings.smokingChoices.map(s => (
              <option value={s.value}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Appetizers</label>
          {this.state.settings.appetizers.map(a => (
            <React.Fragment key={a.id}>
              <input
                type="checkbox"
                name="appetizers"
                value={a.value}
                onChange={this.updateCheckboxes}
                checked={this.state.appetizers.includes(a.value)}
              />
              <label>{a.title}</label>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCheckboxes = event => {
    // is the current checkbox checked already?
    let arrayToChange = this.state[event.target.name];
    if (arrayToChange.includes(event.target.value) === false) {
      this.setState({
        [event.target.name]: [...arrayToChange, event.target.value]
      });
    } else {
      this.setState({
        [event.target.name]: arrayToChange.filter(e => e !== event.target.value)
      });
    }
  };
}

export default Reservation;

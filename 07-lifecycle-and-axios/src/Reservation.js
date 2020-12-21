import React from "react";
import axios from "axios";

class Reservation extends React.Component {
  seatings = [
    {
      id: 1,
      value: "indoors",
      title: "Indoor seatings"
    },
    {
      id: 2,
      value: "outdoors",
      title: "Outdoors seatings"
    },
    {
      id: 3,
      value: "vip-indoors",
      title: "VIP Indoor seatings"
    }
  ];

  smokingChoices = [
    {
      id: 1,
      value: "smoking",
      title: "Smoking allowed"
    },
    {
      id: 2,
      value: "non-smoking",
      title: "Non-smoking"
    }
  ];

  appetizers = [
    {
      id: 1,
      value: "raw-fishes",
      title: "Various sashmi"
    },
    {
      id: 2,
      value: "salad",
      title: "Mixed Salad"
    },
    {
      id: 3,
      value: "fried-cuttlefish",
      title: "Fried cuttlefish"
    },
    {
      id: 4,
      value: "peanuts",
      title: "Healthly Nuts Mix"
    }
  ];

  state = {
    appetizers: [],
    smokingChoice: "non-smoking",
    seating: "indoors",
    firstName: "",
    lastName: ""
  };

  renderSeatingOptions() {
    let jsx = [];
    for (let option of this.seatings) {
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
            {this.smokingChoices.map(s => (
              <option value={s.value}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Appetizers</label>
          {this.appetizers.map(a => (
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

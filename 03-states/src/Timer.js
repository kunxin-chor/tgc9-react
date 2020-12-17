import React from "react";

export default class Timer extends React.Component {
  state = {
    timeLeft: 10
  };
  componentDidMount() {
    let timeout = 1000;
    setTimeout(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1
      });
    }, timeout);
  }
  componentDidUpdate() {
    let timeout = 1000;
    setTimeout(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1
      });
    }, timeout);
  }
  render() {
    return <div>{this.state.timeLeft}</div>;
  }
}

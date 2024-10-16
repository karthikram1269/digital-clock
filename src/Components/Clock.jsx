import React from "react";
import "../Styles/style.css"

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      day: new Date().toLocaleString('en-us', { weekday: 'long' })};

    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      this.setState({ date: new Date().toLocaleDateString() });

    }, 1000);
  }

  render() {
    return (
      <>
        <div class="clock-container">
          <div class ="time">
          <h1>{this.state.time}</h1>
          <h5>{this.state.day}</h5>
          <span>{this.state.date}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
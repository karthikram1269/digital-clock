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
        <div className="clock-container">
          <div className ="time">
          <h1>{this.state.time}</h1>
          <span>{this.state.day}</span>
          <span>{this.state.date}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventValue: 32,
  };

  handleEventInputChanged = (event) => {
    const eventValue = event.target.value;
    this.setState({
      eventValue,
    });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label htmlFor='numberOfEvent'>Number of Events</label>
        <input
          type="number"
          min="1" max="32"
          className="event-number-input"
          placeholder="Enter Number of Events"
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
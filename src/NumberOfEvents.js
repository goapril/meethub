import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberEvents: 32,
  };

  handleInputChange = event => {
    const value = event.target.value;
    console.log(value, typeof value);
    const valueInteger = parseInt(value);
    console.log(valueInteger, typeof valueInteger);

    if (valueInteger <= 0) {
      this.setState({
        numberEvents: value,
      })
    } else if (isNaN(valueInteger)) {
      this.setState({
        numberEvents: value,
      })
    } else {
      this.setState({
        numberEvents: value,
      })
    }
    this.props.updateEventCount(value);
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <label htmlFor='numberOfEvent'>Number of Events</label>
        <input
          type="number"
          className="numberInput"
          value={this.state.numberEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
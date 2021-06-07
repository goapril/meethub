import React, { Component } from 'react';
import './App.css';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  getData = () => {
		const { locations, events } = this.state;
		const data = locations.map((location) => {
			const number = events.filter((event) => event.location === location).length;
			const city = location.split(' ').shift();
			return { city, number };
		})
		return data;
  };

  render() {
    const { locations, numberOfEvents } = this.state;
    return (
      <div className='App'>
        <h1>Meethub App</h1>
        <h4>Choose a city</h4>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

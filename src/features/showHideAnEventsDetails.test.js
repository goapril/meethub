import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let EventListWrapper;
  let EventWrapper;
  let AppWrapper;
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('event details are collapsed', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of all the events without details', () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user opens an event', () => {
      EventWrapper.find(".show-hide-btn").simulate("click");
    });

    then('the user should see more details of the event', () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('an event’s details is expanded', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".show-hide-btn").simulate("click");
      EventWrapper.find(".event");
    });

    when('the user clicks on the button', () => {
      EventWrapper.find(".show-hide-btn").simulate("click");
    });

    then('the event should be collapsed back and hide its details', () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });

})
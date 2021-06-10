import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('user hasn’t specified a number', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    when('the user opens the event page', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see 32 events on the event list', () => {
      expect(NumberOfEventsWrapper.state('numberEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('user has specified a number', () => {
      AppWrapper = mount(<App />);
    });

    when('the user change the number of events they want to see', () => {
      AppWrapper.find(".numberInput").simulate("change", {
        target: { value: 7 }
      })
    });

    then('the user should see the new number of events', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberEvents')).toBe(7);
    });
  });
});

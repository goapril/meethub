import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
  });

  test('check input default value if equal to 32', () => {
    expect(
      NumberOfEventsWrapper.find('.event-number-input').at(0).props().value
    ).toEqual(32);
  });

  test('check placeholder to enter number of events', () => {
    expect(
      NumberOfEventsWrapper.find('.event-number-input').at(0).props()
        .placeholder
    ).toEqual('Enter Number of Events');
  });

  test('check on change state', () => {
    const eventValue = { target: { value: 5 } };

    NumberOfEventsWrapper.find('.event-number-input').simulate(
      'change',
      eventValue
    );
    expect(NumberOfEventsWrapper.state('eventValue')).toBe(5);
  });

  test('check type if equal to number', () => {
    expect(
      NumberOfEventsWrapper.find('.event-number-input').at(0).props().type
    ).toEqual('number');
  });
});
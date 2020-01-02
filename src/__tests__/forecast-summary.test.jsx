import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders a component', () => {
  const wrapper = shallow((
    <ForecastSummary />
  ));

  expect(wrapper.find('.summary-forecast').text()).toEqual('');
});

it('renders a date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.summary-date').text()).toEqual('mockDate');
});

it('renders a temperature', () => {
  const wrapper = shallow ((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.summary-temperature').text()).toEqual('mockTemperature');
});

it('renders a description', () => {
   const wrapper = shallow ((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
   ));

   expect(wrapper.find('.summary-description').text()).toEqual('mockDescription');
});

it('renders an icon', () => {
  const wrapper = shallow ((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.summary-icon').text()).toEqual('mockIcon');
})


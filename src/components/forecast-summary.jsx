import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => {
  return (
    <div className="summary-forecast">
      <span className="summary-date">{moment(props.date).format('ddd Do MMM')}</span>
        <br></br>
      <span className="summary-temperature">{props.temperature}</span>
        <br></br>
      <span className="summary-description">{props.description}</span>
        <br></br>
      <span className="summary-icon"><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span>
        <button onClick={() => props.onSelect(props.date)}>More Details</button>
    </div>
  )
}

export default ForecastSummary;

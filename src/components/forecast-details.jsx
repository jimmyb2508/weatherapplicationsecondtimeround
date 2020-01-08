import React from 'react';
import moment from 'moment';

const ForecastDetails = props => {
  return (
    <div className="forecast-details">
      <span className="formatted-date">Date:{moment(props.forecast.date).format('ddd Do MMM')}</span>
        <br></br>
      <span className="min-temp">Minimum Temperature:{props.forecast.temperature.min}°C</span>
        <br></br>
      <span className="max-temp">Maximum Temperature:{props.forecast.temperature.max}°C</span>
        <br></br>
      <span className="humidity">Humidity:{props.forecast.humidity}%</span>
        <br></br>
      <span className="wind-speed">Wind Speed:{props.forecast.wind.speed}mph</span>
        <br></br>
      <span className="wind-direction">Wind Direction:{props.forecast.wind.direction}</span>
    </div>
  )
}

export default ForecastDetails;
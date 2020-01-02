import React from 'react';

const ForecastSummary = (props) => {
  return (
    <div className="summary-forecast">
      <span className="summary-date">{props.date}</span>
        <br></br>
      <span className="summary-temperature">{props.temperature}</span>
        <br></br>
      <span className="summary-description">{props.description}</span>
        <br></br>
      <span className="summary-icon">{props.icon}</span>
    </div>
  )
}

export default ForecastSummary;
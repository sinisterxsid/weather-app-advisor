import React from 'react';
import './ForecastCard.css';

const ForecastCard = ({ day, date, temp, icon, onClick, isSelected }) => {
  return (
    <div
      className={`forecast-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="forecast-icon">{icon}</div>
      <div className="forecast-day">{day}</div>
      <div className="forecast-date">{date}</div>
      <div className="forecast-temp">{temp} °C</div>
    </div>
  );
};

export default ForecastCard;

import React from 'react';
import './LeftPanel.css';

const LeftPanel = ({
  city,
  temperature,
  condition,
  humidity,
  wind,
  precip,
}) => {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const date = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="left-panel">
      <div className="overlay">
        <div className="location-info">
          <div className="day">{day}</div>
          <div className="date">{date}</div>
          <div className="city">{city}</div>
        </div>

        <div className="temperature">{temperature} °C</div>
        <div className="condition">Condition: {condition}</div>

        <div className="details">
          <p>💧 Humidity: {humidity}%</p>
          <p>💨 Wind: {wind} m/s</p>
          <p>🌧️ Precipitation: {precip}%</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;

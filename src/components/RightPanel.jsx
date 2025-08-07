import React from 'react';
import ForecastCard from './ForecastCard';
import OutfitSuggestion from './OutfitSuggestion';
import './RightPanel.css';

const RightPanel = ({ forecastData, outfitImg, onForecastClick, selectedForecast }) => {
  return (
    <div className="right-panel">
      <div className="forecast-section">
        {forecastData.map((day, idx) => (
          <ForecastCard
            key={idx}
            day={day.day}
            date={day.date}
            temp={day.temp}
            icon={day.icon}
            onClick={() => onForecastClick(day)}
            isSelected={selectedForecast?.index === day.index}
          />
        ))}
      </div>

      <div className="outfit-section">
        <h3>Todays Outfit of the Day Is</h3>
        <OutfitSuggestion imageUrl={outfitImg} />
      </div>
    </div>
  );
};

export default RightPanel;

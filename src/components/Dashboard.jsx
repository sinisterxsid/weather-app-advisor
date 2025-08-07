import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import './Dashboard.css';

const Dashboard = ({
  city,
  temperature,
  condition,
  forecastData,
  outfitImg,
  onForecastClick,
  selectedForecast,
  humidity,
  wind,
  precip,
}) => {
  return (
    <div className="dashboard-container">
      <LeftPanel
        city={city}
        temperature={temperature}
        condition={condition}
        humidity={humidity}
        wind={wind}
        precip={precip}
        onLocationToggle={() => {}}
      />

      <RightPanel
        forecastData={forecastData}
        outfitImg={outfitImg}
        onForecastClick={onForecastClick}
        selectedForecast={selectedForecast}
      />
    </div>
  );
};

export default Dashboard;

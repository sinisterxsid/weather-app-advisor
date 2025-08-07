import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { fetchWeatherByCity } from './api';
import { getAIOutfitImage } from './utils/aiOutfit';
import './App.css';

function App() {
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState('Tempe');
  const [inputCity, setInputCity] = useState('Tempe');
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState('');
  const [outfitImg, setOutfitImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedForecast, setSelectedForecast] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [precip, setPrecip] = useState(null);

  const getWeatherAndOutfit = async () => {
    setLoading(true);
    try {
      const data = await fetchWeatherByCity(city);
      if (!data) return;

      const dailyData = data.list.filter((_, i) => i % 8 === 0).slice(0, 4);
      const formattedForecast = dailyData.map((entry, index) => {
        const dateObj = new Date(entry.dt_txt);
        return {
          index,
          day: dateObj.toLocaleDateString('en-US', { weekday: 'short' }),
          date: dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          temp: Math.round(entry.main.temp),
          icon: getWeatherIcon(entry.weather[0].main),
          condition: entry.weather[0].main,
          humidity: entry.main.humidity,
          wind: entry.wind.speed,
          precip: entry.pop ? Math.round(entry.pop * 100) : 0,
        };
      });

      setForecastData(formattedForecast);

      const current = data.list[0];
      setTemp(Math.round(current.main.temp));
      setCondition(current.weather[0].main);
      setHumidity(current.main.humidity);
      setWind(current.wind.speed);
      setPrecip(current.pop ? Math.round(current.pop * 100) : 0);

      const imageUrl = await getAIOutfitImage(current.main.temp, current.weather[0].main);
      setOutfitImg(imageUrl);
    } catch (err) {
      console.error("❌ Weather fetch failed:", err.message);
      alert("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherAndOutfit();
  }, [city]);

  const handleForecastClick = async (forecast) => {
    setSelectedForecast(forecast);
    setTemp(forecast.temp);
    setCondition(forecast.condition);
    setHumidity(forecast.humidity);
    setWind(forecast.wind);
    setPrecip(forecast.precip);

    setLoading(true);
    try {
      const imageUrl = await getAIOutfitImage(forecast.temp, forecast.condition);
      setOutfitImg(imageUrl);
    } catch (err) {
      console.error('Outfit fetch failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== '') {
      setCity(inputCity.trim());
    }
  };

  const getWeatherIcon = (weather) => {
    switch (weather.toLowerCase()) {
      case 'clear':
        return '☀️';
      case 'clouds':
        return '☁️';
      case 'rain':
        return '🌧️';
      case 'snow':
        return '❄️';
      case 'thunderstorm':
        return '🌩️';
      case 'mist':
      case 'fog':
      case 'haze':
        return '🌫️';
      default:
        return '⛅';
    }
  };

  return (
    <div className="app">
      <form className="location-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <div className="loader-container">
          <div className="spinner" />
        </div>
      ) : (
        <Dashboard
          city={city}
          temperature={temp}
          condition={condition}
          forecastData={forecastData}
          outfitImg={outfitImg}
          onForecastClick={handleForecastClick}
          selectedForecast={selectedForecast}
          humidity={humidity}
          wind={wind}
          precip={precip}
        />
      )}
    </div>
  );
}

export default App;

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!data || !data.list || data.cod !== "200") {
    throw new Error('Invalid forecast data');
  }

  return data;
};

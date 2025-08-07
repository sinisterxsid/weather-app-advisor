export function getOutfit(temp, condition) {
  condition = condition.toLowerCase();
  if (condition.includes('rain')) return '☔ Raincoat and boots';
  if (temp < 10) return '🧥 Heavy jacket, gloves';
  if (temp < 20) return '🧥 Coat and jeans';
  if (temp < 28) return '👕 Hoodie and pants';
  return '👚 T-shirt, shorts, sunglasses';
}

export function getIconFromWeather(main) {
  switch (main.toLowerCase()) {
    case 'clouds': return '☁️';
    case 'rain': return '🌧️';
    case 'clear': return '☀️';
    case 'snow': return '❄️';
    case 'thunderstorm': return '⛈️';
    default: return '🌈';
  }
}
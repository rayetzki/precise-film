export async function getWeatherData({ lat, lon }) {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return fetch(apiUrl).then((response) => response.json());
}

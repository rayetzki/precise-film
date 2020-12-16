import { useEffect, useState } from "react";
import { getWeatherData } from "../api/weather";

export function useCurrentWeather() {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const { longitude: lon, latitude: lat } = coords;
        try {
          const weather = await getWeatherData({ lat, lon });
          setWeather(weather);
        } catch (err) {
          console.error(err);
          setError("Нету данных по твоему местоположению");
        }
      });
    } else {
      setError("Геолокация недоступная. Попробуйте ручной режим");
    }
  }, []);

  return { error, weather };
}

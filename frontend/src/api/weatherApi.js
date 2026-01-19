import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const fetchWeather = (city) =>
  API.get(`/weather?city=${city}`);

export const fetchWeatherByCoords = (lat, lon) =>
  API.get(`/weather?lat=${lat}&lon=${lon}`);

export const fetchForecast = (city) =>
  API.get(`/forecast?city=${city}`);

export const fetchForecastByCoords = (lat, lon) =>
  API.get(`/forecast?lat=${lat}&lon=${lon}`);

import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const fetchWeather = (city) =>
  API.get(`/weather?city=${city}`);

export const fetchForecast = (city) =>
  API.get(`/forecast?city=${city}`);

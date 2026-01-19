import React from 'react';
import { fetchWeather, fetchForecast } from '../api/weatherApi';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';


export default function Home() {
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError('');

      const [weatherRes, forecastRes] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city)
      ]);

      setWeather(weatherRes.data);
      setForecast(forecastRes.data.forecast);
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <WeatherCard data={weather} />
      <ForecastList forecast={forecast} />
    </div>
  );
}

const styles = {
  page: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '16px'
  },
  error: {
    color: 'red'
  }
};

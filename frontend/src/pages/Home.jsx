import React from 'react';
import { fetchWeather, fetchForecast, fetchWeatherByCoords, fetchForecastByCoords } from '../api/weatherApi';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import ErrorCard from '../components/ErrorCard';

export default function Home() {
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [lastSearchedCity, setLastSearchedCity] = React.useState('');
  const [lastCoords, setLastCoords] = React.useState(null);

  const handleSearch = async (city) => {
    if (!city.trim()) return;
    setLastSearchedCity(city);
    setLastCoords(null);
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

  const handleLocationSearch = async (lat, lon) => {
    setLastCoords({ lat, lon });
    setLastSearchedCity('');
    try {
      setLoading(true);
      setError('');

      const [weatherRes, forecastRes] = await Promise.all([
        fetchWeatherByCoords(lat, lon),
        fetchForecastByCoords(lat, lon)
      ]);

      setWeather(weatherRes.data);
      setForecast(forecastRes.data.forecast);
    } catch (err) {
      setError('Unable to get weather for your location');
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastCoords) {
      handleLocationSearch(lastCoords.lat, lastCoords.lon);
    } else if (lastSearchedCity) {
      handleSearch(lastSearchedCity);
    }
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.sunIcon}>☀️</span>
          <h1 style={styles.title}>
            <span style={styles.titleWhite}>Weather</span>
            <span style={styles.titleGold}>Now</span>
          </h1>
        </div>
        <p style={styles.subtitle}>
          Get real-time weather updates and forecasts for any city worldwide
        </p>
      </header>

      {/* Search */}
      <SearchBar onSearch={handleSearch} onLocationSearch={handleLocationSearch} />

      {/* Loading State */}
      {loading && <p style={styles.loading}>Loading...</p>}
      
      {/* Error State */}
      {error && (
        <ErrorCard 
          message="City not found. Please check the spelling and try again."
          onRetry={handleRetry}
        />
      )}

      {/* Empty State */}
      {!weather && !loading && !error && (
        <div style={styles.emptyState}>
          <div style={styles.iconBox}>
            <span style={styles.cloudIcon}>☁️</span>
            <span style={styles.sunIconLarge}>☀️</span>
            <span style={styles.cloudIcon}>☁️</span>
          </div>
          <p style={styles.emptyText}>Search for a city</p>
        </div>
      )}

      {/* Weather Results */}
      <WeatherCard data={weather} />
      <ForecastList forecast={forecast} />
    </div>
  );
}

const styles = {
  page: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 16px',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  sunIcon: {
    fontSize: '32px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
  },
  titleWhite: {
    color: '#ffffff',
  },
  titleGold: {
    color: '#d4a853',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '16px',
  },
  loading: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: '40px',
  },
  error: {
    textAlign: 'center',
    color: '#ef4444',
    marginTop: '20px',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '60px',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '40px 60px',
    borderRadius: '16px',
    border: '1px solid #374151',
    background: 'rgba(55, 65, 81, 0.3)',
    marginBottom: '24px',
  },
  cloudIcon: {
    fontSize: '40px',
    opacity: '0.6',
  },
  sunIconLarge: {
    fontSize: '48px',
  },
  emptyText: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '600',
  },
};

export default function WeatherCard({ data }) {
  if (!data) return null;

  const { location, current } = data;

  const getWeatherIcon = (condition) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Fog': '🌫️',
      'Haze': '🌫️',
    };
    return icons[condition] || '🌤️';
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.city}>{location.city}, {location.country}</h2>
          <p style={styles.condition}>{current.condition}</p>
        </div>
        <span style={styles.icon}>{getWeatherIcon(current.condition)}</span>
      </div>
      
      <div style={styles.tempSection}>
        <span style={styles.temp}>{Math.round(current.tempC)}°C</span>
        <span style={styles.feelsLike}>Feels like {Math.round(current.feelsLikeC)}°C</span>
      </div>

      <div style={styles.details}>
        <div style={styles.detailItem}>
          <span style={styles.detailIcon}>💧</span>
          <div>
            <p style={styles.detailLabel}>Humidity</p>
            <p style={styles.detailValue}>{current.humidity}%</p>
          </div>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.detailIcon}>💨</span>
          <div>
            <p style={styles.detailLabel}>Wind</p>
            <p style={styles.detailValue}>{current.windKph} km/h</p>
          </div>
        </div>
      </div>

      <p style={styles.updated}>
        Last updated: {new Date(current.updatedAt).toLocaleTimeString()}
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
    borderRadius: '16px',
    padding: '24px',
    marginTop: '24px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  city: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '4px',
  },
  condition: {
    color: '#9ca3af',
    fontSize: '16px',
  },
  icon: {
    fontSize: '48px',
  },
  tempSection: {
    marginBottom: '24px',
  },
  temp: {
    fontSize: '56px',
    fontWeight: '700',
    color: '#ffffff',
    display: 'block',
  },
  feelsLike: {
    color: '#9ca3af',
    fontSize: '14px',
  },
  details: {
    display: 'flex',
    gap: '32px',
    marginBottom: '16px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  detailIcon: {
    fontSize: '24px',
  },
  detailLabel: {
    color: '#9ca3af',
    fontSize: '12px',
    marginBottom: '2px',
  },
  detailValue: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
  },
  updated: {
    color: '#6b7280',
    fontSize: '12px',
    textAlign: 'right',
  },
};

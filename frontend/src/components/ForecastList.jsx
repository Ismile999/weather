export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

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

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>5-Day Forecast</h3>

      <div style={styles.list}>
        {forecast.map((item, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.date}>{formatDate(item.time)}</p>
            <p style={styles.time}>{formatTime(item.time)}</p>
            <span style={styles.icon}>{getWeatherIcon(item.condition)}</span>
            <p style={styles.condition}>{item.condition}</p>
            <p style={styles.temp}>{Math.round(item.tempC)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '32px',
  },
  title: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '12px',
  },
  card: {
    background: '#1f2937',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
  },
  date: {
    color: '#9ca3af',
    fontSize: '12px',
    marginBottom: '2px',
  },
  time: {
    color: '#6b7280',
    fontSize: '11px',
    marginBottom: '12px',
  },
  icon: {
    fontSize: '32px',
    display: 'block',
    marginBottom: '8px',
  },
  condition: {
    color: '#9ca3af',
    fontSize: '12px',
    marginBottom: '8px',
  },
  temp: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '700',
  },
};

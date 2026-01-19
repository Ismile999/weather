export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div style={styles.container}>
      <h3>Forecast</h3>

      <div style={styles.list}>
        {forecast.map((item, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.time}>
              {new Date(item.time).toLocaleString()}
            </p>
            <p>{item.condition}</p>
            <p style={styles.temp}>{item.tempC}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '12px'
  },
  card: {
    padding: '12px',
    borderRadius: '8px',
    background: '#f4f4f4',
    textAlign: 'center'
  },
  time: {
    fontSize: '12px',
    color: '#666'
  },
  temp: {
    fontWeight: 'bold'
  }
};

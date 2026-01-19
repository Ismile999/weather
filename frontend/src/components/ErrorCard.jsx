export default function ErrorCard({ message, onRetry }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconCircle}>
          <span style={styles.icon}>!</span>
        </div>
        <h3 style={styles.title}>Oops! Something went wrong</h3>
        <p style={styles.message}>{message}</p>
        <button onClick={onRetry} style={styles.button}>
          <span style={styles.refreshIcon}>↻</span>
          Try Again
        </button>
      </div>
      <footer style={styles.footer}>
        Powered by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer" style={styles.link}>OpenWeatherMap</a>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  },
  card: {
    background: 'rgba(55, 65, 81, 0.5)',
    border: '1px solid #374151',
    borderRadius: '16px',
    padding: '40px 60px',
    textAlign: 'center',
    maxWidth: '500px',
  },
  iconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'rgba(239, 68, 68, 0.2)',
    border: '2px solid #ef4444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  icon: {
    color: '#ef4444',
    fontSize: '32px',
    fontWeight: '700',
  },
  title: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  message: {
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '24px',
    lineHeight: '1.5',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'transparent',
    border: '1px solid #4b5563',
    borderRadius: '8px',
    padding: '10px 20px',
    color: '#ffffff',
    fontSize: '14px',
    cursor: 'pointer',
  },
  refreshIcon: {
    fontSize: '16px',
  },
  footer: {
    marginTop: '60px',
    color: '#6b7280',
    fontSize: '14px',
  },
  link: {
    color: '#d4a853',
    textDecoration: 'none',
  },
};

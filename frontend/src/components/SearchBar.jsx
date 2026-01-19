import React from 'react';

export default function SearchBar({ onSearch, onLocationSearch }) {
  const [city, setCity] = React.useState('');
  const [locating, setLocating] = React.useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(city);
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onLocationSearch(latitude, longitude);
        setLocating(false);
      },
      (error) => {
        alert('Unable to get your location. Please allow location access.');
        setLocating(false);
      }
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchBox}>
        <span style={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button onClick={() => onSearch(city)} style={styles.searchButton}>
          Search
        </button>
        <button onClick={handleLocation} style={styles.locationButton} disabled={locating}>
          {locating ? '⏳' : '📍'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#1f2937',
    borderRadius: '12px',
    padding: '8px 12px',
    width: '100%',
    maxWidth: '600px',
    gap: '12px',
  },
  searchIcon: {
    fontSize: '18px',
    opacity: '0.6',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#ffffff',
    fontSize: '16px',
    padding: '8px 0',
  },
  searchButton: {
    background: '#d4a853',
    color: '#1a1f2e',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  locationButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '8px',
  },
};

import React from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = React.useState('');

  return (
    <div>
      <input
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={() => onSearch(city)}>Search</button>
    </div>
  );
}

export default function WeatherCard({ data }) {
  if (!data) return null;

  const { location, current } = data;

  return (
    <div>
      <h2>{location.city}, {location.country}</h2>
      <p>{current.condition}</p>
      <p>Temp: {current.tempC}°C</p>
      <p>Feels like: {current.feelsLikeC}°C</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind: {current.windKph} km/h</p>
    </div>
  );
}

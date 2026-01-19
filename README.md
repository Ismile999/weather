# ☀️ WeatherNow

A modern full-stack weather application with real-time weather updates and forecasts for any city worldwide.

![WeatherNow](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![API](https://img.shields.io/badge/API-OpenWeatherMap-orange)

## ✨ Features

- 🔍 Search weather by city name
- 📍 Get weather by current location (geolocation)
- 🌡️ Current weather details (temperature, feels like, humidity, wind)
- 📅 5-point forecast display
- ⚡ Server-side caching for performance
- 🎨 Modern dark theme UI
- ❌ User-friendly error handling
- 📱 Responsive design

## 🛠️ Tech Stack

**Frontend**
- React 18 (Vite)
- React Router DOM
- Axios

**Backend**
- Node.js / Express
- In-memory caching
- OpenWeatherMap API

## 📁 Project Structure

```
weather-app/
├── backend/
│   └── src/
│       ├── routes/
│       ├── services/
│       ├── utils/
│       ├── app.js
│       └── server.js
├── frontend/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- OpenWeatherMap API key ([Get one free](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ismile999/weather.git
cd weather-app
```

2. **Install dependencies**
```bash
npm run install:all
```

3. **Configure environment variables**

Backend (`backend/.env`):
```
PORT=5000
WEATHER_API_KEY=your_openweather_api_key
```

Frontend (`frontend/.env`):
```
VITE_API_URL=http://localhost:5000/api
```

4. **Run the application**
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/weather?city=London` | Get weather by city |
| GET | `/api/weather?lat=51.5&lon=-0.12` | Get weather by coordinates |
| GET | `/api/forecast?city=London` | Get forecast by city |
| GET | `/api/forecast?lat=51.5&lon=-0.12` | Get forecast by coordinates |
| GET | `/health` | Health check |

## 🧠 Caching

- Current weather: 10 minutes TTL
- Forecast: 30 minutes TTL
- In-memory cache (resets on server restart)

## 📝 Notes

- Uses metric units (°C, km/h)
- No database required
- Location feature requires browser permission

## 📄 License

MIT

👤 Author
Ismile Khan
Full Stack Developer

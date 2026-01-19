# 🌦️ Full Stack Weather App

A full-stack weather application that allows users to search for current weather and forecast by city, built with React and Node.js.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios
- Responsive UI

### Backend
- Node.js
- Express
- Axios
- In-memory caching

### Weather Provider
- OpenWeatherMap API

---

## 📌 Features

- Search weather by city name
- (Bonus) Search by geolocation (lat/lon)
- Current weather details:
  - Temperature
  - Feels like
  - Condition
  - Humidity
  - Wind speed
  - Last updated time
- Forecast (next 5 time points)
- Loading & error states
- Server-side caching for performance

---

## 📂 Project Structure

weather-app/
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── utils/
│ │ └── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── api/
│ └── package.json
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

2️⃣ Backend Setup

cd backend
npm install

Create .env file:
PORT=5000
WEATHER_API_KEY=your_openweather_api_key

Run backend:
npm run dev

Backend runs on:
http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install

Create .env file:
VITE_API_URL=http://localhost:5000/api

Run frontend:
npm run dev

Frontend runs on:
http://localhost:5173


🔌 API Endpoints
Get Current Weather
GET /api/weather?city=London
GET /api/weather?lat=12.97&lon=77.59

Get Forecast
GET /api/forecast?city=London


🧠 Caching Strategy
Current weather cached for 10 minutes
Forecast cached for 30 minutes
Reduces API calls & improves response time
Implemented using in-memory cache (can be replaced with Redis in production)


🌍 Deployment
Backend
Deploy on Render / Railway
Add environment variables in dashboard

Frontend
Deploy on Vercel
Set VITE_API_URL to backend URL


⚠️ Assumptions & Limitations
No database used
Metric units only (°C)
In-memory cache resets on server restart


✨ Future Improvements
Redis caching
Weather icons
Unit toggle (°C / °F)
Dark mode
Daily forecast view


👤 Author
Ismile Khan
Full Stack Developer
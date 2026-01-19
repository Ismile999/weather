const axios = require('axios');
const { mapCurrentWeather, mapForecast } = require('../utils/responseMapper');
const { getCache, setCache } = require('../utils/cache');

const API_KEY = process.env.WEATHER_API_KEY;

exports.getWeather = async (req, res) => {
    try {
        const { city, lat, lon } = req.query;

        // ✅ Correct validation
        if (!city && (!lat || !lon)) {
            return res.status(400).json({
                error: 'City or valid coordinates (lat, lon) required'
            });
        }

        if (lat && isNaN(lat)) return res.status(400).json({ error: 'Invalid latitude' });
        if (lon && isNaN(lon)) return res.status(400).json({ error: 'Invalid longitude' });


        let url;

        // ✅ City-based search
        if (city) {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        }
        // ✅ Coordinate-based search
        else {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        }

        const response = await axios.get(url);
        const mapped = mapCurrentWeather(response.data);

        res.json(mapped);
    } catch (error) {
        res.status(404).json({ error: 'Weather data not found' });
    }
};

exports.getForecast = async (req, res) => {
    try {
        const { city } = req.query;
        if (!city) return res.status(400).json({ error: 'City required' });

        const cacheKey = `forecast:${city.toLowerCase()}`;
        const cached = getCache(cacheKey);
        if (cached) {
            return res.json(cached);
        }

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await axios.get(url);

        const mapped = mapForecast(response.data);

        // Cache for 30 minutes
        setCache(cacheKey, mapped, 30 * 60 * 1000);

        res.json(mapped);
    } catch {
        res.status(404).json({ error: 'Forecast not available' });
    }
};

const express = require('express');
const { getWeather, getForecast } = require('../services/weather.service');

const router = express.Router();

router.get('/weather', getWeather);
router.get('/forecast', getForecast);

module.exports = router;

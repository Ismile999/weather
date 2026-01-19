const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.send('OK'));

app.use('/api', weatherRoutes);

module.exports = app;

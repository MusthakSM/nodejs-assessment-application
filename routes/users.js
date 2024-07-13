const express = require('express');
const router = express.Router();
const User = require('../models/user');
const getWeather = require('../utils/weather');

// Route to add/update user details and fetch weather data
router.post('/weather', async (req, res) => {
  const { email, name, location } = req.body;

  try {
    const weatherData = await getWeather(location);
    const user = await User.findOneAndUpdate(
      { email },
      { 
        $set: { location, name },
        $push: { weatherData: { date: new Date(), data: weatherData } } 
      },
      { new: true, upsert: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data', error });
  }
});

// Route to get user's weather data for a given day
router.get('/weather/:email/:date', async (req, res) => {
  const { email, date } = req.params;
  const startDate = new Date(date);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 1);

  try {
    const user = await User.findOne({ email, 'weatherData.date': { $gte: startDate, $lt: endDate } }, { 'weatherData.$': 1 });
    if (user) {
      res.json(user.weatherData[0]);
    } else {
      res.status(404).json({ message: 'No weather data found for the given day' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data', error });
  }
});

module.exports = router;

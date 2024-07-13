const cron = require('node-cron');
const User = require('../models/user');
const  getWeatherData  = require('../utils/weather');
const { sendEmail } = require('../utils/email');
// const { generateWeatherReport } = require('../utils/openAI');


const weatherJob = cron.schedule('* * * * *', async () => {
  try {
    const users = await User.find({});
    users.forEach(async user => {
      const weatherData = await getWeatherData(user.location);
      // const weatherReport = await generateWeatherReport(weatherData);

      user.weatherData.push({ date: new Date(), data: weatherData });
      await user.save();

      await sendEmail(user.email, 'Hourly Weather Report', weatherData);
    });
  } catch (error) {
    console.error('Error in weather job:', error);
  }
});

module.exports = weatherJob;
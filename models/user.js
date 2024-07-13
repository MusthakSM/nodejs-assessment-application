const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  data: { type: Object, required: true }
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true }, // Added name field
  location: { type: String, required: true },
  weatherData: [weatherDataSchema]
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);
module.exports = User;


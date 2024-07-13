# nodejs-assessment-application
This is the backend application developed with node.js for CODESCALE selection assessment for Internship.

# Node.js Weather API

## Overview
This is a simple Node.js API for managing user details and storing their weather data using MongoDB. The API includes functionality to add users, update their locations, and retrieve weather data for specific dates.

## Features
- Store user details
- Update user locations
- Retrieve user weather data for specific dates
- Scheduled weather updates via cron job

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Node-Cron


## Environment Variables

To run this application, you need to set up the following environment variables. Create a `.env` file in the root directory of your project and populate it with the values provided below.

### Required Variables

| Variable                 | Description                                      |
|--------------------------|--------------------------------------------------|
| `MONGODB_URI`           | MongoDB connection string to your database       |
| `OPENWEATHERMAP_API_KEY`| API key for accessing OpenWeatherMap data        |
| `OPENAI_API_KEY`        | API key for accessing OpenAI services            |

### Example `.env` File

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.8qrtemx.mongodb.net/weatherreport?retryWrites=true&w=majority&appName=Cluster0
OPENWEATHERMAP_API_KEY=<your_openweathermap_api_key>
OPENAI_API_KEY=<your_openai_api_key>


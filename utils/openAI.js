const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: 'process.env.OPENAI_API_KEY',
});

const createChatCompletion = async () => {
  const weatherData = {
    weather: [{ description: 'clear sky' }],
    main: { temp: 20, feels_like: 18, humidity: 50 },
    wind: { speed: 5 },
  };

  try {
    const prompt = `Generate a detailed weather report based on the following data: ${JSON.stringify(weatherData)}`;
    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo', // or use 'gpt-4' if available
      prompt: prompt,
      max_tokens: 150,
    });

    console.log(response.choices[0].text.trim());
  } catch (error) {
    console.error('Error generating weather report:', error);
  }
};

createChatCompletion();

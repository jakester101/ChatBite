const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//route for generating recipe
app.post('/', (req, res) => {
  const prompt = req.body.prompt;
  axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
        {"role": "system", "content": "You are a recipe helper. Your response will be formatted as a JSON with the following parameters: {name: ' ', description: ' ', instructions: ' ', calorieCount: ' ', prepTime: ' '}"},
        {"role": "user", "content": `${prompt}. Respond with the JSON object only.`}
    ]
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  })
  .then(response => res.json(JSON.parse(response.data.choices[0].message.content)))
  .catch(error => console.log(error));
});

/*
{
	"name": "Beef and Bean Burrito Bowl",
	"description": "A delicious and healthy burrito bowl filled with beef, beans, rice, lettuce and tomato.",
	"instructions": "1. Cook rice according to package instructions. \n2. In a skillet, cook ground beef until browned. Add beans and cook for another 3-4 minutes until heated through. \n3. In a bowl, layer rice, beef and bean mixture, lettuce, and tomato. \n4. Serve and enjoy!",
	"calorieCount": "500",
	"prepTime": "30 minutes"
}
*/



//route for generating image
app.post('/api/generate-image', (req, res) => {
  axios.post('https://api.openai.com/v1/images/generations', {
    prompt: req.body.prompt,
    n : 1,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  })
  .then(response => res.json(response.data))
  .catch(error => console.log(error));
});
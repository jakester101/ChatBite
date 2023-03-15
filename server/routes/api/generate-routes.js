const express = require('express');
const cors = require('cors');
const axios = require('axios');
const router = require('express').Router();
const dotenv = require("dotenv");
dotenv.config();
API_KEY = process.env.API_KEY;


const app = express();
app.use(express.json());
app.use(cors());

//route for generating recipe
router.post('/text', (req, res) => {
  const prompt = req.body.prompt;

  axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
        {"role": "system", "content": "You are a recipe helper. Your response will be formatted as a JSON with the following parameters: {name: ' ', description: ' ', instructions: ' ', calorieCount: ' ', prepTime: ' '}"},
        {"role": "user", "content": `${prompt}`}
    ]
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY,
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => console.error(error));
});


//route for generating image
router.post('/image', (req, res) => {
  axios.post('https://api.openai.com/v1/images/generations', {
    prompt: req.body.prompt,
    n : 1,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY,
    }
  })
  .then(response => res.json(response.data))
  .catch(error => console.log(error));
});

module.exports = router;
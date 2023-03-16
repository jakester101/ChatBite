const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true
        
    },
    instructions: {
        type: String,
        required: true,
    },
    prepTime: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
    },
    calories: {
        type: String,
    },
    image: {
        type: String, 
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    createdBy: {
        type: String,
        required: false,
    },
    isPublic: {
        type: Boolean,
        default: false,
    }, 
})


const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    ingredients: [{
        name: {
            type: String, required: true
        },
        quantity: {
            type: String,
            required: true,
        }
    }],
    instructions: {
        type: String,
        required: true,
    },
    prepTime: {
        type: Number,
        required: true,
    },
    rating: {
        type:Number
    },
    calories: {
        type: Number,
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
        required: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    }, 
})


const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
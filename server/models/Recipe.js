const {Schema, model} = require('mongoose');

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
    time: {
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
        url: {
            type: String, required: true
        }
    },
    createdBy: {
        type: String,
        required: true,
    } 
})


const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
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
})


module.exports = model('Recipe', recipeSchema);
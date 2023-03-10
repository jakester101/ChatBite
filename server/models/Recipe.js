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
            type: string,
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
    calories: {
        type: Number,
    },
})


module.exports = model('Recipe', recipeSchema);
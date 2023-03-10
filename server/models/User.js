const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String, 
        required:true,
        unique: true,
    },
   password:{
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe',
        },
    ]
})

const User = model('User', userSchema)

module.exports = User;
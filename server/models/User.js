const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String, 
        unique: false, 
        required:false, 
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
    loggedIn: {
        type: Boolean,
        default: false,
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe',
        },
    ]
})

const User = model('User', userSchema)
console.log(User)
module.exports = User;
const db = require('../config/connection')
const {User, Recipe} = require('../models')
const usersData = require('./userSeed.json');
const recipesData = require('./recipesSeeds.json')



db.once('open', async () => {
    User.insertMany(usersData)
        .then(() => {
        console.log('Inserted users data')
    })
        .catch((err) => {
        console.error(err);
});

    Recipe.insertMany(recipesData)
        .then(() => {
        console.log('Inserted recipes data')
    })
        .catch((err) => {
        console.error(err);
});
})
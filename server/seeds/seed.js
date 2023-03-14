const db = require('../config/connection')
const {User, Recipe} = require('../models')
const usersData = require('./userSeed.json');
const recipesData = require('./recipesSeeds.json')



db.once('open', async () => {
    try {
        // deletes all the previous data inside the collections
        await Recipe.deleteMany({});
        await User.deleteMany({});

        await User.create(usersData);

        for (let i = 0; i < recipesData.length; i++) {
            const { _id, searcher } = await Recipe.create(recipesData[i]);
            const user = await User.findOneAndUpdate(
                { username: searcher },
                {
                    $addToSet: {
                        ingredients: _id,
                    },
                }
            );
        }
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
    console.log('all done');
    process.exit(0);
})
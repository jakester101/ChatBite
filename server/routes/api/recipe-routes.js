const router = require('express').Router();
const {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    updateRecipe,
    getAllPublicRecipes
} = require('../../controllers/recipe-controller');

router.route('/')
    .get(getAllRecipes)
    .post(createRecipe);

router.route('/query/:id')
    .get(getSingleRecipe)
    .put(updateRecipe);

router.route('/public')
    .get(getAllPublicRecipes);

module.exports = router;    
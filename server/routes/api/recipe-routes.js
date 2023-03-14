const router = require('express').Router();
const {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    updateRecipe
} = require('../../controllers/recipe-controller');

router.route('/')
    .get(getAllRecipes)
    .post(createRecipe);

router.route('/:id')
    .get(getSingleRecipe)
    .put(updateRecipe);

module.exports = router;
const router = require('express').Router();
const {
    getAllRecipes,
    getSingleRecipes,
    createRecipe,
    updateRecipe
} = require('../../controllers/user-controller');

router.route('/')
    .get(getAllRecipes)
    .post(createRecipe);

router.route('/:id')
    .get(getSingleRecipes)
    .put(updateRecipe);

module.exports = router;
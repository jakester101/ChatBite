const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const recipeRoutes = require('./recipe-routes');
const generateRoutes = require('./generate-routes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/generate', generateRoutes);

module.exports = router;
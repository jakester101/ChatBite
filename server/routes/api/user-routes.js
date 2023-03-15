const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    signup
} = require('../../controllers/user-controller');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser);

router.route('/signup').post(signup)

module.exports = router;
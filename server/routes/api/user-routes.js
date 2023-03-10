const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser
} = require('../../controllers/user-controller');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser);

module.exports = router;
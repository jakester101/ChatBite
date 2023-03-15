const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    signup,
    login,
    logout
} = require('../../controllers/user-controller');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    

router.route('/signup').post(signup)

router.route('/login').post(login)

router.route('/logout').post(logout)

module.exports = router;
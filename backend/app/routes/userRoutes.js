const express = require('express');
const authJwt = require('../middleware/authJwt');
const { registerUser, loginUser, getUserById, getUsers, deleteById } = require('../controllers/userController');
const router = express.Router();

router.get('/users', authJwt.verifyToken, getUsers);
router.post('/auth/users/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/user', getUserById);
router.delete('/users/delete', authJwt.verifyToken, deleteById);

module.exports = router;

const express = require('express');
const { signup, login, getUser, updateUser, getAllUser, activeUsers } = require('../controllers/userController');
//const { authenticate } = require('../authenticate');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.get('/allUser', getAllUser);
router.get('/activeUsers', activeUsers);
module.exports = router;

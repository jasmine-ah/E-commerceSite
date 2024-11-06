const express = require('express');
const { signup, login, getUser, updateUser, getAllUser } = require('../controllers/userController');
//const { authenticate } = require('../authenticate');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.get('/allUser', getAllUser);

module.exports = router;

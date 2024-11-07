const express = require('express');
const { activeUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/activeUsers', activeUsers);

module.exports = router;
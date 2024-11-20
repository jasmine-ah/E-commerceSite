const express = require('express');
const { activeUsers } = require('../controllers/userController');
const {productReport} = require('../controllers/productController');
const { productsSold } = require('../controllers/orderController');
const router = express.Router();

router.get('/activeUsers', activeUsers);
router.get('/countproduct',productReport);
router.get('/productsold', productsSold);
module.exports = router;
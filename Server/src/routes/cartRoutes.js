const express = require('express');
const router = express.Router();
const { authenticate } = require('../authenticate');
const { addToCart, getCart, updateQuantity, deleteFromCart } = require('../controllers/cartController');

router.post('/addToCart', authenticate, addToCart);
router.get('/getCart', authenticate, getCart);
router.put('/updateQuantity/:productId', authenticate, updateQuantity);
router.delete('/deleteFromCart/:productId', authenticate, deleteFromCart);

module.exports = router;

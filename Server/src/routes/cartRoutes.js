const express = require('express');
const router = express.Router();
const { authenticate } = require('../authenticate');
const { addToCart, getCart, updateQuantity, deleteCartItem, checkout } = require('../controllers/cartController');

router.post('/addToCart', authenticate, addToCart);
router.get('/:id',authenticate, getCart);
router.put('/updateQuantity/:productId', authenticate, updateQuantity);
router.delete('/delete/:product_id', deleteCartItem);
router.post('/checkout', checkout);

module.exports = router;

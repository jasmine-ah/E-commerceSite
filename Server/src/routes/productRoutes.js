const express = require('express');
const {getAllProduct, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const router = express.Router();
router.get('/all',getAllProduct);
router.get('/:id',getProduct);
router.post('/create',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;
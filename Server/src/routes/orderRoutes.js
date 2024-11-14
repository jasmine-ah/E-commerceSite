const express = require('express');
const router = express.Router();
const { authenticate } = require('../authenticate');
const { getOrder, getAllOrder, orderReport } = require('../controllers/orderController');

router.get('/all',authenticate, getOrder);
router.get('/admin/all',getAllOrder);
router.get('/orderreport',orderReport);

module.exports = router;
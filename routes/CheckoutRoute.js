// routes.js atau index.js

const express = require('express');
const router = express.Router();
const { checkout, getAllCheckoutWithDetail } = require('../controllers/CheckoutController');

// Route untuk checkout
router.post('/', checkout);
router.get('/', getAllCheckoutWithDetail);


module.exports = router;

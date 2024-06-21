// routes.js atau index.js

const express = require('express');
const router = express.Router();
const { addDetailCheckout } = require('../controllers/DetailCheckoutController');

// Route untuk menambahkan detail checkout
router.post('/', addDetailCheckout);

module.exports = router;

// routes.js atau index.js

const express = require('express');
const router = express.Router();
const { getAllObat } = require('../controllers/ObatController');

// Route untuk mengambil semua data obat
router.get('/', getAllObat);

module.exports = router;

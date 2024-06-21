// routes/uploadRoute.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const uploadController = require('../controllers/PredictController');

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('image'), uploadController.uploadImage);

module.exports = router;

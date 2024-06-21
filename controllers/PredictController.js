// controllers/uploadController.js
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const image = req.file;

        // Menggunakan FormData untuk mengirim file
        const formData = new FormData();
        formData.append("file", image.buffer, {
            filename: image.originalname,
            contentType: req.file.mimetype
        });

        // Konfigurasi Axios untuk mengirim FormData ke endpoint
        const config = {
            method: 'post',
            url: 'https://getprediction-625t3z7m3a-et.a.run.app/predict',
            headers: {
                ...formData.getHeaders()  // Menambahkan header dari FormData
            },
            data: formData
        };

        // Kirim permintaan menggunakan Axios
        const response = await axios(config);

        // Mengirimkan respons dari API eksternal ke client
        res.json(response.data);
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).send('Error processing image.');
    }
};

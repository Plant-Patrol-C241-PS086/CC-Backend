// controllers/detailCheckoutController.js

const { DetailCheckout } = require('../models');

const addDetailCheckout = async (req, res) => {
    try {
        const { checkoutId, obatId, quantity } = req.body;

        // Simpan detail checkout ke dalam database
        const newDetailCheckout = await DetailCheckout.create({ checkoutId, obatId, quantity });

        return res.status(201).json({
            success: true,
            message: 'Detail checkout berhasil ditambahkan',
            data: newDetailCheckout
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal menambahkan detail checkout',
            error: error.message
        });
    }
};

module.exports = { addDetailCheckout };

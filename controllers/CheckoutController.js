// controllers/checkoutController.js

const { Checkout, DetailCheckout } = require('../models');

const checkout = async (req, res) => {
    try {
        const { totalAmount } = req.body;
        const userId = req.user

        // Simpan data checkout ke dalam database
        const newCheckout = await Checkout.create({ userId, totalAmount });

        return res.status(201).json({
            success: true,
            message: 'Checkout berhasil',
            data: newCheckout
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal melakukan checkout',
            error: error.message
        });
    }
};

const getAllCheckoutWithDetail = async (req, res) => {
    try {
        const userId = req.user; // Perhatikan penggunaan req.user.id

        // Dapatkan semua checkout yang dilakukan oleh pengguna
        const checkouts = await Checkout.findAll({ where: { userId } });

        // Dapatkan detail checkout untuk setiap checkout
        const checkoutDetails = await Promise.all(checkouts.map(async (checkout) => {
            // Dapatkan detail checkout berdasarkan checkoutId
            const details = await DetailCheckout.findAll({ where: { checkoutId: checkout.id } });
            return { checkout, details };
        }));

        return res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan semua checkout dan detail checkout',
            data: checkoutDetails
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal mendapatkan checkout dan detail checkout',
            error: error.message
        });
    }
};



module.exports = { checkout, getAllCheckoutWithDetail };

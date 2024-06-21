
const { Obat } = require("../models");

const getAllObat = async (req, res) => {
    try {
        const obat = await Obat.findAll();

        return res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan semua data obat',
            data: obat
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal mendapatkan data obat',
            error: error.message
        });
    }
};

module.exports = { getAllObat };

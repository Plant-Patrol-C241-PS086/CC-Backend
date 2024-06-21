// models/Checkout.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Checkout extends Model {
        static associate(models) {
            // Tambahkan hubungan asosiasi di sini jika diperlukan
        }
    }
    Checkout.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        // Tambahkan properti lain yang dibutuhkan untuk checkout
    }, {
        sequelize,
        modelName: 'Checkout',
        tableName: 'checkout' // Pastikan tabel yang sesuai dengan model ini
    });
    return Checkout;
};

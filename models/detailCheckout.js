// models/DetailCheckout.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DetailCheckout extends Model {
        static associate(models) {
            // Tambahkan hubungan asosiasi di sini jika diperlukan
        }
    }
    DetailCheckout.init({
        checkoutId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        obatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1 // Default quantity adalah 1
        }
    }, {
        sequelize,
        modelName: 'DetailCheckout',
        tableName: 'DetailCheckout' // Pastikan tabel yang sesuai dengan model ini
    });
    return DetailCheckout;
};

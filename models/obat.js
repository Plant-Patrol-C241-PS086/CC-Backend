'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Obat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here, jika ada
        }
    }
    Obat.init({
        penyakit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        obat: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            sequelize,
            modelName: 'Obat',
            tableName: 'obat'
        });
    return Obat;
};

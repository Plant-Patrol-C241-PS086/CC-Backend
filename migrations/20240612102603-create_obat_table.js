'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Obat', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penyakit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      obat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Menggunakan CURRENT_TIMESTAMP sebagai nilai default
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') // Menggunakan CURRENT_TIMESTAMP sebagai nilai default dan ON UPDATE CURRENT_TIMESTAMP untuk mengubah updatedAt secara otomatis saat data diperbarui
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Obat');
  }
};

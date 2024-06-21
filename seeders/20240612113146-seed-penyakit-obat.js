'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Obat', [
      { penyakit: 'Apple Black Root', obat: 'Fungicide' },
      { penyakit: 'Apple Rust', obat: 'Fungicide' },
      { penyakit: 'Apple Scab', obat: 'Fungicide' },
      { penyakit: 'Cassava Bacterial Blight', obat: 'Copper fungicide' },
      { penyakit: 'Cassava Brown Streak Disease', obat: 'Insecticides' },
      { penyakit: 'Cassava Green Mottle', obat: 'Insecticides' },
      { penyakit: 'Cassava Mosaic Disease', obat: 'Insecticides' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Obat', null, {});
  }
};

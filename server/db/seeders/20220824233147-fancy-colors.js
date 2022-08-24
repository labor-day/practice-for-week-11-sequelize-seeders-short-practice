'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Colors', [
      {name:'fancy1', createdAt: new Date(2000, 1, 1)},
      {name:'fancy2', createdAt: new Date(2000, 1, 1)},
      {name:'fancy3', createdAt: new Date(2000, 1, 1)}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', {
      name: ['fancy1', 'fancy2', 'fancy3']
    });
  }
};

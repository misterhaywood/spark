'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
       'Notes', 
       [
         {
           name: 'First Note',
           content: 'This is the first note.'
          }
        ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Notes', null, {});
  }
};

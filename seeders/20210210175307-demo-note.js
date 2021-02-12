'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
       'Notes', 
       [
         {
           name: 'First Note',
           content: 'This is the first note.',
           userId: 1
          },
          {
            name: 'Another First Note',
            content: 'This is NOT the first note. 😊',
            userId: 3
           },
        ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Notes', null, {});
  }
};

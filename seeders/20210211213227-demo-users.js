'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
       'Users', 
       [
         {
            name: 'Jack Johnson',
            username: 'blackjack',
            password: 'boxing'
          },
          {
            name: 'Kay Kraus',
            username: 'thecoder',
            password: 'sour'
          },
          {
            name: 'Lenny Plenty',
            username: 'lenny',
            password: 'plenty'
          },
        ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 
    'username', 
    { 
    	type: Sequelize.STRING 
    }),
    await queryInterface.addColumn('Users', 
    'password', 
    { 
    	type: Sequelize.STRING 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'username');
    await queryInterface.removeColumn('Users', 'password');

  }
};

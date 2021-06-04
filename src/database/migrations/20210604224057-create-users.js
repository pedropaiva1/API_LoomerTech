'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,//ID do Usuário.
        primaryKey: true,
        autoIncrement: true,// Campo com auto incremental.
        allowNull: false// Não pode ser nulo.
      },
      NAME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CPF: {
        type: Sequelize.STRING,
        allowNull: false
      },
      EMAIL: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PASSWORD: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CREATED_AT: {
        type: Sequelize.DATE,
        allowNull: false
      },
      UPDATED_AT: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('users')
  }
};

'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id:{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      brandName:{
        type : Sequelize.STRING,
        allowNull:false
      },
      notesParfume:{
        type : Sequelize.STRING,
        allowNull:false
      },
      descriptionParfume:{
        type : Sequelize.TEXT,
      },
      createdAt:{
        type : Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type : Sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('products');
  }
};

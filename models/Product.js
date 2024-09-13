const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");


module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define('Product',{
        id:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      brandName:{
        type : DataTypes.STRING,
        allowNull:false
      },
      notesParfume:{
        type : DataTypes.STRING,
        allowNull:false
      },
      descriptionParfume:{
        type : DataTypes.TEXT,
      },
      createdAt:{
        type : DataTypes.DATE,
        allowNull:false
      },
      updatedAt:{
        type : DataTypes.DATE,
        allowNull:false
      }
      },{
        tableName: 'products'
    });
    return Product;
}
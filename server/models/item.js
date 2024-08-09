// + This file was added which defines Item model for the database

// + Import the necessary modules from the 'db' file
const { db, sequelize, DataTypes, Model } = require('../db');

// + Define the Item model with either ints or strings for each field
const Item = sequelize.define('Item', {
    Name: DataTypes.STRING, 
    Description: DataTypes.STRING, 
    Price: DataTypes.INTEGER, 
    Category: DataTypes.INTEGER, 
    Image: DataTypes.STRING, 
  }, {});

module.exports = { Item };
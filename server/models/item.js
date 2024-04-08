const { db, Sequelize, DataTypes, Model } = require('../db');
 
const Items = db.define ('Items',{
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Category: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {});
 
module.exports = { Items }
const { db, Sequelize, DataTypes, Model } = require('../db');
 
const Item = db.define ('Item',{
    Name: {
        type: DataTypes.STRING,
    },
    Description: {
        type: DataTypes.STRING,  
    },
    Price: {
        type: DataTypes.INTEGER,   
    },
    Category: {
        type: DataTypes.INTEGER,    
    },
    Image: {
        type: DataTypes.STRING,
    },
}, {});
 
module.exports = { Item }
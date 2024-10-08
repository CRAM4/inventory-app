const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});
// + Defines the Item model
const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.INTEGER,
  image: Sequelize.STRING
});

module.exports = {
  db: sequelize,
  Sauce,Item
};

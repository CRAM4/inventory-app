const {items} = require('./seedData.js');

const {sequelize} = require('./db');
const {Item} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));//awaiting the promise from mapping over the items array, 
        //for every item that you find in the array, you create an instance of the item model.

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();

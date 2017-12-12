const Sequelize = require('sequelize');
const database = require('../database/connect');

const Product = database.define('product', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});

//ONLY FOR TESTS!!!
//Uncommented string will drop the table if it already exists

/*
Product.sync({force: true});

const numbers = Array.from(new Array(50), (x,i) => i);

numbers.map(number => {
  Product.create({
    title: 'Product ' + number,
    description: 'Product ' + number
  });
})

*/

module.exports = Product;

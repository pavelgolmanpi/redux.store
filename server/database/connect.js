const Sequelize = require('sequelize');

const database = new Sequelize('mysql://store:store@localhost:3306/redux_store');

const Product = database.define('product', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});

const Category = database.define('category', {
  title: {
    type: Sequelize.STRING
  }
});

Product.belongsTo(Category);

Category.belongsTo(Category, {foreignKey: 'categoryId', targetKey: 'id', as: 'parent'});
Category.children = Category.hasMany(Category);

//ONLY FOR TESTS!!!
//Uncommented string will drop the table if it already exists


//Category.sync({force: true});
//Product.sync({force: true});



/*
var numbers = Array.from(new Array(10), (x,i) => i);

numbers.map(number => {
  Category.create({
    title: 'Category ' + number
  });
})


numbers = Array.from(new Array(50), (x,i) => i);

numbers.map(number => {
  Product.create({
    title: 'Product ' + number,
    description: 'Product ' + number
  });
})
*/


module.exports = {Category, Product};

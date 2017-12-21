const express = require('express');
const {Category} = require('../database/connect');

console.log(Category);

const router = express.Router();

router.get('/categories', function(req, res, next) {
  Category.findAll({
    include: [{
        model: Category
    }]
}).then(categories => {
    res.json(categories);
  }).catch(function (err) {
    return res.status(500).json({
      message: 'Could not retrieve categories'
    });
  });
});

router.post('/categories', function(req, res, next) {
    res.json({});
});

router.get('/categories/:id', function(req, res, next) {
    Category.findById(req.params.id).then(category => {
      if(!category){
        return res.status(404).json({
          message: 'Could not retrieve category'
        });
      }
      res.json(category);
    }).catch(function (err) {
      return res.status(500).json({
        message: 'Could not retrieve category'
      });
    });
});

router.delete('/categories/:id', function(req, res, next) {

    res.json({
      result: 'Category was deleted'
    });

});

router.post('/categories/validate/fields', function(req, res, next) {

      return res.json({});
});


module.exports = router;

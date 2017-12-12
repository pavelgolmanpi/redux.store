const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', function(req, res, next) {
  Product.findAndCountAll({ offset: parseInt(req.query.offset), limit: parseInt(req.query.limit) }).then(products => {
    res.json(products);
  }).catch(function (err) {
    return res.status(500).json({
      message: 'Could not retrieve products'
    });
  });
});

router.post('/products', function(req, res, next) {

    res.json({});
});

router.get('/products/:id', function(req, res, next) {

    res.json({});
});

router.delete('/products/:id', function(req, res, next) {

    res.json({
      result: 'Product was deleted'
    });

});

router.post('/products/validate/fields', function(req, res, next) {

      return res.json({});
});


module.exports = router;

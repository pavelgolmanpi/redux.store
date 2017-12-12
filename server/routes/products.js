var express = require('express');
var router = express.Router();

router.get('/products', function(req, res, next) {
  res.json([]);

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

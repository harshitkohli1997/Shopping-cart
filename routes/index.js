const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
/* GET home page. */
router.get('/', function(req, res, next) {
  const products = Product.find((err,docs) => {
    var productChunks = [];
    var Chunksize = 3;
    for(var i =0; i < docs.length; i= i + Chunksize)
    {
      productChunks.push(docs.slice(i,i+Chunksize));
    }
    res.render('index', { title: 'Shopping cart',
    products:productChunks
   });
  });
 
});

router.get('/shop', (req,res) => {
res.render('shop/cart');
});
module.exports = router;

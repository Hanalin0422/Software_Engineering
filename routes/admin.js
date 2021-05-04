// routes/Study.js

var express = require('express');
var router = express.Router();
var Product = require('../models/Product');

// Index 
router.get('/', async function(req, res){
    products = await Product.find();
    res.render('admin/index', {
    products:products
  });
});
router.get('/table', function(req, res){
    res.render('admin/table');
  });

router.get('/form', function(req, res){
    res.render('admin/form');
});

router.get('/register', function(req, res){
    res.render('admin/register');
});

router.get('/detail', function(req, res){
  res.render('admin/detail');
});
router.get('/modify', function(req, res){
    res.render('admin/modify');
});

  module.exports = router;
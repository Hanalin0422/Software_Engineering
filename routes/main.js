// routes/home.js

var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
// Main
router.get('/', async function(req, res){
  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};
  var products = await Product.find();
      res.render('main/index', {
      username:username,
      errors:errors,
      products:products
    });
});


//test
router.post('/test',function(req,res){

});

//개인정보
router.get('/privacy', function(req, res){
  res.render('main/privacy');
});
// 이용약관
router.get('/policy', function(req, res){
  res.render('main/policy');
});

router.get('/destination_select',function(req,res){
  res.render('main/destination_select');
});

// 배송지 추가/수정
router.get('/destination_create',function(req,res){
  res.render('main/destination_create');
});

router.get('/test',function(req,res){
  res.render('main/test.php');
});

//about us --
router.get('/about',function(req,res){

  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};

  res.render('main/about',{
    username:username,
    errors:errors,
  });
});


//contact하기 --
router.get('/contact-us',function(req,res){

  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};

  res.render('main/contact-us',{
    username:username,
    errors:errors,
  });
});

// cart --
router.get('/cart',function(req,res){
  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};

  res.render('main/cart', {
    username:username,
    errors:errors,
  });
})

// gallery --
router.get('/gallery',function(req,res){

  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};

  res.render('main/gallery',{
    username:username,
    errors:errors,
  });
})

// order_list
router.get('/order_list',function(req,res){

  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};

  res.render('main/order_list',{
    username:username,
    errors:errors,
  });
})

router.get('/category', async function(req,res){
  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};

  var page = Math.max(1, parseInt(req.query.page));  
  var limit = Math.max(1, parseInt(req.query.limit));
  var origin = Math.max(1,parseInt(req.query.origin));
  page = !isNaN(page)?page:1;                        
  limit = !isNaN(limit)?limit:3;
  origin =!isNaN(origin)?origin:0;                    

  var skip = (page-1)*limit; // 4
  var count = await Product.countDocuments({}); 
  var maxPage = Math.ceil(count/limit);

  if(origin == 0){
  var products = await Product.find()
    .sort('-createdAt')
    .skip(skip)   // 8
    .limit(limit) // 8
    .exec();
  }else{
    var products = await Product.find({'origin' : origin})
    .sort('-createdAt')
    .skip(skip)   // 8
    .limit(limit) // 8
    .exec();
  }
  res.render('main/category', {
    username:username,
    errors:errors,
    products:products,
    currentPage:page,
    maxPage:maxPage,  
    limit:limit,
    origin:origin
  });
})



router.get('/:id', function(req, res){
  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};
  Product.findOne({_id:req.params.id})
    .exec(function(err, product){
      if(err) return res.json(err);
      res.render('main/detail', {
        username:username,
        errors:errors,
        product:product
      });
    });
});

// Post Login
// 주문 내역
router.get('/order_list',function(req,res){
  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};
  res.render('main/order_list',{
    username:username,
    errors:errors
  });
});

module.exports = router;

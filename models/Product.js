// model/Product.js

var mongoose = require('mongoose');


// schema 상품 [이름/가격/제조사/맛/중량/원산지/판매량/재고]
var productSchema = mongoose.Schema({
  name:{type:String, required:[true, 'Name is required!']},
  price:{type:Number, required:[true, 'Price is required!']},
  manufacturer:{type:String},
  categoty:{type:String},
  body:{type: String},
  taste:{type:String},
  weight:{type:String, required:[true, 'Weight is reqired!']},
  origin:{type:String},
  sales:{type:Number, default:0, min:0},
  stock:{type:Number, default:1000, min:0},
});

// model & export 
var Product = mongoose.model('product',productSchema);
module.exports = Product;
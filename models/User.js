const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
 email:{
     type:String,
     required:true
 },
 password: {
     type:String,
     required:true
 }
});
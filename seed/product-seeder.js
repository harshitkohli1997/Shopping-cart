const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://harshit:scooby1234@ds257077.mlab.com:57077/social-dev')
.then(() => {
    console.log('mongodb connected')
})
.catch((err) => {
    console.log(err);
})
const products = [
    new Product({
    imagepath:'/images/abc.jpeg',
    title:'bird',
    price:'10',
    description:'angry bird'
    
}),
new Product({
    imagepath:'/images/tiger.jpg',
    title:'tiger',
    price:'100',
    description:'hello tiger'
    
}),
new Product({
    imagepath:'/images/elep.jpg',
    title:'elephant',
    price:'110',
    description:'yeah buy me pls'
    
})

];
var done = 0;
for(var i =0; i < products.length; i++)
{
    products[i].save((err,result) => {
        done++;
        if(done === products.length)
        {
            exit();
        }
    })
}
function exit() {
    mongoose.disconnect();
}

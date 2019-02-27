// app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
// initialize  express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser: true}, err => {
    if(!err){
        console.log('mongodb connection success')
    }else{
        console.log('error:'+ err)
    }
})

let port = 3026;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
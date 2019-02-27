const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
    // controllers/products.js
exports.product_create = function (req, res) {
    console.log(req.body)
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        console.log(err)
        if (err) {
            return (err);
        }
        res.send('Product Created successfully')
    })
};

    exports.product_details = function (req, res) {
        Product.findById(req.params.id, function (err, product) {
            if (err) return(err);
            res.send(product);
        })
    };

    exports.product_update = function (req, res) {
        Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
            if (err) return (err);
            res.send('Product udpated.');
        });
    };

    exports.product_delete = function (req, res) {
        Product.findByIdAndRemove(req.params.id, function (err) {
            if (err) return (err);
            res.send('Deleted successfully!');
        })
    };
     exports.product_getall = function (req,res) {
         Product.find({}).toArray(function(err) {
            if (err) throw err;
            res.send('view all data!');
            db.close();
          })
     };
    
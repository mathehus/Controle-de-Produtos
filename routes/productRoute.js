const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const {getProducts, getProduct, putProduct, createProduct, deleteProduct} = require('../controllers/productController');

//search all products
router.get('/products', getProducts);

// search specific product
router.get('/product/:id/:a', getProduct);

// to update specific product
router.put('/product/:id', putProduct);

//create new product
router.post('/products', createProduct);

//delete a specific product 
router.delete('/product/:id', deleteProduct)

module.exports = router;

const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

router.get('/add-product', productController.getProduct);

router.post('/add-product',productController.postProduct)

module.exports = router;
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/products', productController.viewProducts);
router.get('/products/add', productController.showAddForm);
router.post('/products/add', productController.addProduct);
router.get('/products/edit/:id', productController.showEditForm);
router.post('/products/update', productController.updateProduct);
router.get('/products/delete/:id', productController.deleteProduct);

module.exports = router;

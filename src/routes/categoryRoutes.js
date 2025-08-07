const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.get('/', categoryController.homePage);
router.get('/view', categoryController.viewCategories);
router.post('/add', categoryController.addCategory);
router.get('/edit/:id', categoryController.editCategory);
router.post('/update/:id', categoryController.updateCategory);
router.get('/delete/:id', categoryController.deleteCategory);

module.exports = router;

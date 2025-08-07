const categoryModel = require('../models/categoryModel');

exports.homePage = (req, res) => {
    res.render('home');
};

exports.viewCategories = (req, res) => {
    categoryModel.getAllCategories()
        .then(data => {
            res.render('addCategory', { categories: data });
        })
        .catch(err => {
            console.error("Error fetching categories:", err);
            res.send("Error fetching categories");
        });
};

exports.addCategory = (req, res) => {
    const { categoryName } = req.body;
    categoryModel.createCategory(categoryName)
        .then(() => res.redirect('/view'))
        .catch(err => {
            console.error("Error adding category:", err);
            res.send("Error adding category");
        });
};

exports.editCategory = (req, res) => {
    const id = req.params.id;
    categoryModel.getCategoryById(id)
        .then(result => {
            res.render("editCategory", { category: result[0] });
        })
        .catch(err => {
            console.error("Error loading edit page:", err);
            res.send("Error loading edit page");
        });
};

exports.updateCategory = (req, res) => {
    const id = req.params.id;
    const { categoryName } = req.body;
    categoryModel.updateCategory(id, categoryName)
        .then(() => res.redirect('/view'))
        .catch(err => {
            console.error("Error updating category:", err);
            res.send("Error updating category");
        });
};

exports.deleteCategory = (req, res) => {
    const id = req.params.id;
    categoryModel.deleteCategory(id)
        .then(() => res.redirect('/view'))
        .catch(err => {
            console.error("Error deleting category:", err);
            res.send("Error deleting category");
        });
};
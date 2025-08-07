const productModel = require('../models/productModel');
const categoryModel = require('../models/categoryModel');

exports.viewProducts = (req, res) => {
    productModel.getAllProducts()
        .then(products => {
            res.render("productList", { products });
        })
        .catch(err => res.send("Error loading products"));
};

exports.showAddForm = (req, res) => {
    categoryModel.getAllCategories()
        .then(categories => {
            res.render("addProduct", { categories });
        });
};

exports.addProduct = (req, res) => {
    const { product_name, categoryId } = req.body;
    productModel.createProduct(product_name, categoryId)
        .then(() => res.redirect("/products"))
        .catch(err => res.send("Error adding product"));
};

exports.showEditForm = (req, res) => {
    const pid = req.params.id;
    Promise.all([
        productModel.getProductById(pid),
        categoryModel.getAllCategories()
    ])
    .then(([product, categories]) => {
        res.render("editProduct", { product: product[0], categories });
    })
    .catch(err => res.send("Error loading form"));
};

exports.updateProduct = (req, res) => {
    const { pid, product_name, categoryId } = req.body;
    productModel.updateProduct(pid, product_name, categoryId)
        .then(() => res.redirect("/products"))
        .catch(err => res.send("Error updating product"));
};

exports.deleteProduct = (req, res) => {
    const pid = req.params.id;
    productModel.deleteProduct(pid)
        .then(() => res.redirect("/products"))
        .catch(err => res.send("Error deleting product"));
};

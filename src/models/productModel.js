const db = require('../config/db');

// Get all products with category name
exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT p.pid, p.product_name, c.categoryId, c.categoryName 
            FROM product p 
            JOIN category c ON p.categoryId = c.categoryId
        `;
        db.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

// Create new product
exports.createProduct = (productName, categoryId) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO product (product_name, categoryId) VALUES (?, ?)", [productName, categoryId], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

// Get product by ID
exports.getProductById = (pid) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM product WHERE pid = ?", [pid], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

// Update product
exports.updateProduct = (pid, productName, categoryId) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE product SET product_name=?, categoryId=? WHERE pid=?", [productName, categoryId, pid], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

// Delete product
exports.deleteProduct = (pid) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM product WHERE pid=?", [pid], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

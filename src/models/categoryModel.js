const db = require('../config/db');

exports.getAllCategories = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM category", (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.getCategoryById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM category WHERE categoryId = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.createCategory = (categoryName) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO category (categoryName) VALUES (?)", [categoryName], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.updateCategory = (id, name) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE category SET categoryName = ? WHERE categoryId = ?", [name, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM category WHERE categoryId = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}; 
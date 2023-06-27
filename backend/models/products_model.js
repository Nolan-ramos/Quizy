const mysql = require('mysql');
const connection = require('../db');

const ProductModel = {
  getAll: function(callback) {
    const query = 'SELECT * FROM products';
    connection.query(query, callback);
  },

  getById: function(id, callback) {
    const query = 'SELECT * FROM products WHERE id_product = ?';
    connection.query(query, [id], callback);
  },

  deleteProduct: function(id, callback) {
    const query = 'DELETE FROM products WHERE id_product = ?';
    connection.query(query, [id], callback);
  },  

  createProduct: function(name, price, callback) {
    const query = 'INSERT INTO products (name_product, price_product) VALUES (?, ?)';
    connection.query(query, [name, price], callback);
  },  

  updateProduct: function(id, name, price, callback) {
    const query = 'UPDATE products SET name_product = ?, price_product = ? WHERE id_product = ?';
    connection.query(query, [name, price, id], callback);
  }
};

module.exports = ProductModel;

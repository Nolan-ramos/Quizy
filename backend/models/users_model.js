const mysql = require('mysql');
const connection = require('../db');

const UserModel = {
  getAll: function(callback) {
    const query = 'SELECT * FROM users';
    connection.query(query, callback);
  },

  getById: function(id, callback) {
    const query = 'SELECT * FROM users WHERE id_user = ?';
    connection.query(query, [id], callback);
  },

  deleteUser: function(id, callback) {
    const query = 'DELETE FROM users WHERE id_user = ?';
    connection.query(query, [id], callback);
  },  

  createUser: function(email, password, callback) {
    const query = 'INSERT INTO users (email_user, password_user) VALUES (?, ?)';
    connection.query(query, [email, password], callback);
  },  

  updateUser: function(id, email, password, callback) {
    const query = 'UPDATE users SET email_user = ?, password_user = ? WHERE id_user = ?';
    connection.query(query, [email, password, id], callback);
  }
};

module.exports = UserModel;

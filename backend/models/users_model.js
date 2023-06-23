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

};

module.exports = UserModel;

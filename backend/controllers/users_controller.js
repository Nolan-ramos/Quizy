const UserModel = require('../models/users_model');

const UserController = {
  getAllUsers: function(req, res) {
    UserModel.getAll((err, users) => {
      if (err) {
        console.error('Erreur lors de la récupération des utilisateurs :', err);
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
        return;
      }
      res.json(users);
    });
  },
  
  getUserById: function(req, res) {
    const userId = req.params.id;
    UserModel.getById(userId, (err, user) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
        return;
      }
      if (!user) {
        res.status(404).send('Utilisateur non trouvé');
        return;
      }
      res.json(user);
    });
  },

  deleteUser: function(req, res) {
    const userId = req.params.id;
    UserModel.deleteUser(userId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'utilisateur :', err);
        res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
        return;
      }
      res.json(result);
    });
  },

  createUser: function(req, res) {
    const { email, password } = req.body;
    UserModel.createUser(email, password, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de l\'utilisateur :', err);
        res.status(500).send('Erreur lors de la création de l\'utilisateur');
        return;
      }
      res.json(result);
    });
  },
  
};

module.exports = UserController;

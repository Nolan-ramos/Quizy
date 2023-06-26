const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users_controller');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

router.post('/', UserController.createUser);

router.delete('/:id', UserController.deleteUser);

module.exports = router;

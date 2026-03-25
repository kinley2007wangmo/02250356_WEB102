const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Routes
const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUsers).put(updateUser).delete(deleteUser);

module.exports = router;
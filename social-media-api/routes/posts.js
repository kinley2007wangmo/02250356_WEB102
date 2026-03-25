const express = require("express");

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/postController");

// Routes
const router = express.Router();

router.route('/').get(getPosts).post(createPost);

router.route('/:id').get(getPosts).put(updatePost).delete(deletePost);

module.exports = router;
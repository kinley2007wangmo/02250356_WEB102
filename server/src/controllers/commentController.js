const { comments } = require("../models");

exports.getAllComments = (req, res) => {
  res.json(comments);
};

exports.getCommentById = (req, res) => {
  const comment = comments.find(c => c.id == req.params.id);
  res.json(comment);
};

exports.createComment = (req, res) => {
  const newComment = {
    id: comments.length + 1,
    ...req.body
  };
  comments.push(newComment);
  res.json(newComment);
};

exports.deleteComment = (req, res) => {
  const index = comments.findIndex(c => c.id == req.params.id);
  comments.splice(index, 1);
  res.send("Deleted");
};
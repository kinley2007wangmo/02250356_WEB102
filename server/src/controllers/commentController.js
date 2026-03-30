const dataStore = require('../models');

// GET all comments
const getAllComments = (req, res) => {
  res.status(200).json(dataStore.comments);
};

// GET comment by ID
const getCommentById = (req, res) => {
  const commentId = parseInt(req.params.id);
  const comment = dataStore.comments.find(c => c.id == commentId);

  if (!comment) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  res.status(200).json(comment);
};

// CREATE comment
const createComment = (req, res) => {
  const { text, userId, videoId } = req.body;

  if (!text || !userId || !videoId) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const userExists = dataStore.users.some(u => u.id === parseInt(userId));
  const videoExists = dataStore.videos.some(v => v.id === parseInt(videoId));

  if (!userExists) {
    return res.status(400).json({ error: 'User does not exist' });
  }

  if (!videoExists) {
    return res.status(400).json({ error: 'Video does not exist' });
  }

  const newComment = {
    id: dataStore.nextIds.comments++,
    text,
    userId: parseInt(userId),
    videoId: parseInt(videoId),
    createdAt: new Date().toISOString()
  };

  dataStore.comments.push(newComment);

  res.status(201).json(newComment);
};

// PUT update comment
const updateComment = (req, res) => {
  const commentId = parseInt(req.params.id);
  const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

  if (commentIndex === -1) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  const { text } = req.body;
  const comment = dataStore.comments[commentIndex];

  if (text) comment.text = text;

  comment.updatedAt = new Date().toISOString();

  res.status(200).json(comment);
};

// DELETE comment
const deleteComment = (req, res) => {
  const commentId = parseInt(req.params.id);
  const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

  if (commentIndex === -1) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  dataStore.comments.splice(commentIndex, 1);

  res.status(204).end();
};

// GET comments of a video
const getVideoComments = (req, res) => {
  const videoId = parseInt(req.params.id);
  const video = dataStore.videos.find(v => v.id === videoId);
  
  if (!video) {
    return res.status(404).json({ error: 'Video not found' });
  }

  const comments = dataStore.comments.filter(c => c.videoId === videoId);
  res.status(200).json(comments);
};

// GET comments by user
const getUserComments = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = dataStore.users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const comments = dataStore.comments.filter(c => c.userId === userId);
  res.status(200).json(comments);
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
  getVideoComments,
  getUserComments
};
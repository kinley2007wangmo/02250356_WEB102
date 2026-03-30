const dataStore = require('../models');

const getAllVideos = (req, res) => {
  res.status(200),json(dataStore.videos);
};

const getVideoById = (req, res) => {
  const videoId = parseInt(req.params.id);
  const video = dataStore.videos.find(v => v.id == videoId);

  if (!video) {
    return res.status(404).json({ error: 'Video not found' });
  }

  res.status(200).json(video);
};

const createVideo = (req, res) => {
  const { title, description, url, userId } = req.body;

  if (!title || !url || !userId) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const userExits = dataStore.users.some(user => user.id ===parseInt(userId));
  if (!userExits) {
    return res.status(400).json({ error: 'User does not exist' });
  }

  const newVideo = {
    id: dataStore.nextIds.videos++,
    title,
    description: description || '',
    url,
    userId: parseInt(userId),
    likes: [],
    createdAt: new Date().toISOString()
  };

  dataStore.videos.push(newVideo);

  res.status(201).json(newVideo);

};

  // PUT update a video
const updateVideo = (req, res) => {
  const videoId = parseInt(req.params.id);
  const videoIndex = dataStore.videos.findIndex(v => v.id === videoId);

  if (videoIndex === -1) {
    return res.status(404).json({ error: 'Video not found' });
  }

  const { title, description, url } = req.body;
  const video = dataStore.videos[videoIndex];

  // Update fields if provided
  if (title) video.title = title;
  if (description !== undefined) video.description = description;
  if (url) video.url = url;

  video.updatedAt = new Date().toISOString();

  res.status(200).json(video);
};

// DELETE a video
const deleteVideo = (req, res) => {
  const videoId = parseInt(req.params.id);
  const videoIndex = dataStore.videos.findIndex(v => v.id === videoId);

  if (videoIndex === -1) {
    return res.status(404).json({ error: 'Video not found' });
  }

  // Remove the video
  dataStore.videos.splice(videoIndex, 1);

  // Also remove associated comments
  dataStore.comments = dataStore.comments.filter(c => c.videoId !== videoId);

  res.status(204).end();
};

// GET video comments
const getVideoComments = (req, res) => {
  const videoId = parseInt(req.params.id);

  const video = dataStore.videos.find(v => v.id === videoId);

  if (!video) {
    return res.status(404).json({ error: 'Video not found' });
  }

  const comments = dataStore.comments.filter(c => c.videoId === videoId);

  res.status(200).json(comments);
};

// GET video likes
const getVideoLikes = (req, res) => {
  const videoId = parseInt(req.params.id);
  const video = dataStore.videos.find(v => v.id === videoId);

  if (!video) {
    return res.status(404).json({ error: 'Video not found' });
  }

  // Get users who liked the video
  const likedUsers = video.likes
    .map(userId => {
      return dataStore.users.find(user => user.id === userId);
    }).filter(Boolean);

  res.status(200).json(likedUsers);
};

// POST like a video
const likeVideo = (req, res) => {
  const videoId = parseInt(req.params.id);
  const { userId } = req.body;

  // Validate userId
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  const userIdInt = parseInt(userId);
  const video = dataStore.videos.find(v => v.id === videoId);
  const user = dataStore.users.find(u => u.id === userIdInt);

  if (!video) {
    return res.status(404).json({ error: 'Video not found' });
  }

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check if already liked
  if (video.likes.includes(userIdInt)) {
    return res.status(409).json({ error: 'User already liked this video' });
  }

  // Add like
  video.likes.push(userIdInt);

  res.status(201).json({ message: 'Video liked successfully' });
};

const unlikeVideo = (req, res) => {
  const videoId = parseInt(req.params.id);
  const { userId } = req.body;

  // Validate userId
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  const userIdInt = parseInt(userId);
  const video = dataStore.videos.find(v => v.id === videoId);

  if (!video) {
    return res.status(404).json({ error: 'Video not found' });
  }

  const likeIndex = video.likes.index0f(userIdInt);
  if (likeIndex === -1) {
    return res.status(404).json({ error: 'Like not found' });
  }

  video.likes.splice(likeIndex, 1);

  res.status(204).end();
};

module.exports = {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
  getVideoComments,
  getVideoLikes,
  likeVideo,
  unlikeVideo
};
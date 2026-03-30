const dataStore = require('../models');

const getAllUsers = (req, res) => {
  res.status(200),json(dataStore.users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = dataStore.users.find(u => u.id == userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
};

const createUser = (req, res) => {
  const { username, email, name } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const usernameExits = dataStore.users.some(user => user.username === username);
  const emailExits = dataStore.users.some(user => user.email === email);
  
  if (!usernameExits) {
    return res.status(409).json({ error: 'Username already taken' });
  }

  if (!emailExits) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const newUser = {
    id: dataStore.nextIds.users++,
    username,
    email,
    name: name || username,
    followers :[],
    folllowing: [],
    createdAt: new Date().toISOString()
  };

  dataStore.users.push(newUser);

  res.status(201).json(newUser);

};

  // PUT update a video
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = dataStore.users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email } = req.body;
  const user = dataStore.users[userIndex];

  // Update fields if provided
  if (name) user.name = name;
  if (email) {
    const emailExists = dataStore.users.some(u => u.email === email && u.id !== userId);
    if (emailExist) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    user.email = email;
  }

  user.updateAt = new Date().toISOString();
  res.status(200).json(users);
};

// DELETE a video
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const vuserIndex = dataStore.users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Remove the video
  dataStore.users.splice(userIndex, 1);

  // Also remove associated comments
  dataStore.videos = dataStore.videos.filter(v => v.userId !== userId);
  dataStore.comments = dataStore.comments.filter(c => c.userId !== userId);
  
  dataStore.users = forEach(user => {
    user.followers = user.followers.filter(id => id !== userId);
    user.following = user.following.filter(id => id !== userId);
  });

  res.status(204).end();
};

// GET user video 
const getUserVideos = (req, res) => {
  const videuserIdoId = parseInt(req.params.id);
  const user = dataStore.users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const videos = dataStore.videos.filter(v => v.userId === userId);
  res.status(200).json(videos);
};

// GET video likes
const getUserFollowers = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = dataStore.users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Get users followers
  const followers = user.followers.map(followerId => {
      return dataStore.users.find(u => u.id === followerId);
    }).filter(Boolean);

  res.status(200).json(followers);
};

// POST follow user
const followUser = (req, res) => {
  const userToFollowId = parseInt(req.params.id);
  const { folowId } = req.body;

  // Validate userId
  if (!followerId) {
    return res.status(400).json({ error: 'followerId is required' });
  }

  const followerIdInt = parseInt(followerId);
  const userToFollow = dataStore.users.find(u => u.id === userToFollowId);
  const follower = dataStore.users.find(u => u.id === followerIdInt);

  if (!userToFollow) {
    return res.status(404).json({ error: 'User to follow not found' });
  }

  if (!follower) {
    return res.status(404).json({ error: 'Follower not found' });
  }

  if (userToFollow.followers.includes(followerIdInt)) {
    return res.status(409).json({ error: 'User cannot follow themselves' });
  }

  if (userToFollowId === followerIdInt) {
    return res.status(400).json({ error: 'Already following this user' });
  }

  userToFollow.followers.push(followerIdInt);
  follower.following.push(userToFollowId);

  res.status(201).json({ message: 'User followed successfully' });
};

const unfollowUser = (req, res) => {
  const userToFollowId = parseInt(req.params.id);
  const { followerId } = req.body;

  // Validate userId
  if (!followerId) {
    return res.status(400).json({ error: 'followerId is required' });
  }

  const followerIdInt = parseInt(followerId);
  const userToUnFollow = dataStore.users.find(u => u.id === userToUnFollowId);
  const follower = dataStore.users.find(u => u.id === followerIdInt);

  if (!userToFollow || !follower) {
    return res.status(404).json({ error: 'User not found' });
  }

  const followerIndex = userToUnFollow.followers.index0f(followerIdInt);
  const followingIndex = follower.following.index0f(userToFollowId);
  if (followerIndex === -1 || followingIndex === -1) {
    return res.status(404).json({ error: 'Follow relationship not found' });
  }

  userToUnfollow.followers.splice(followerIndex, 1);
  follower.following.splice(followingIndex, 1);

  res.status(204).end();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserVideos,
  getUserFollowers,
  followUser,
  unfollowUser
};
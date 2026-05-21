const dataStore = {
  users: [
    {
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      name: 'John Doe',
      followers: [2],
      following: [2],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      username: 'jane_doe',
      email: 'jane@example.com',
      name: 'Jane Doe',
      followers: [1],
      following: [1],
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      username: 'bob_smith',
      email: 'bob@example.com',
      name: 'Bob Smith',
      followers: [],
      following: [],
      createdAt: new Date().toISOString()
    }
  ],

  videos: [
    {
      id: 1,
      title: 'My First Video',
      description: 'This is my first TikTok video!',
      url: 'https://example.com/videos/1',
      userId: 1,
      likes: [2, 3],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Dancing Video',
      description: 'Check out my dance moves!',
      url: 'https://example.com/videos/2',
      userId: 2,
      likes: [1],
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Cooking Tutorial',
      description: 'How to make pasta from scratch',
      url: 'https://example.com/videos/3',
      userId: 1,
      likes: [],
      createdAt: new Date().toISOString()
    }
  ],

  comments: [
    {
      id: 1,
      text: 'Great video!',
      userId: 2,
      videoId: 1,
      likes: [1],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      text: 'Love this content!',
      userId: 3,
      videoId: 1,
      likes: [],
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      text: 'Amazing dance moves!',
      userId: 1,
      videoId: 2,
      likes: [2],
      createdAt: new Date().toISOString()
    }
  ],

  // Auto-incrementing IDs
  nextIds: {
    users: 4,
    videos: 4,
    comments: 4
  }
};

module.exports = dataStore;
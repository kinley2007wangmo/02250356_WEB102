const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { posts, users } = require ('../utils/mockData');

exports.getPosts = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = Posts.length;

  const results = Posts.slice(startIndex, endIndex);

  const enhancedResults = results.map(post => {
    const user = users.find(user => user.id === post.user_id);
    return {
        ...post,
        user: {
            id: user.id,
            username: user.username,
            full_name: user.full_name,
            profile_picture: user.profile_picture
        }
    };
  });

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

    if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }
  
  res.status(200).json({
    success: true,
    count: enhancedResults.length,
    page,
    total_pages: Math.ceil(total / limit),
    pagination,
    data: enchancedResults
  });
});

// GET all posts
// GET single post
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = posts.find(post => post.id == req.params.id);

  if (!post) {
    return next(
        new ErrorResponse(`Post not found with id of ${req.params.id}` ,404)
    );
  }

  const usere = users.find(user => user.id === post.user_id);
  const enchancedPost = {
    ...post,
    user: {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        profile_picture: user.profile_picture
    }
  };
  
  res.status(200).json({
    success: true,
    data: enchancedPost
  });
});

// CREATE post
exports.createPost = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
  if (!userId) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
  
  const user = users.find(user => user.id === userId);
  if (!user) {
    return next(new ErrorResponse('User not found', 404));
  }

    const newPost = {
    id: (posts.length + 1).toString(),
    caption: req.body.caption,
    image: req.body.image,
    user_id: userId,
    created_at: new Data().toISOString().slice(0, 10)
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    data: newPost
  });
});

// UPDATE post
exports.updatePost = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  let post = posts.find(post => post.id == req.params.id);

  if (!post) {
    return next(
        new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }

  if (post.user_id !== userId) {
    return next(new ErrorResponse(`Not authorized to updatethis post`, 401));
  }
  
  const index = users.findIndex(user => user,id === req.params.id);

  posts[index] = {
    ...post,
    ...req.body,
    id: post.id, //Ensure ID doesn't change
    user_id: post.user_id
  };

  res.status(200).json({
    success: true,
    data: posts[index]
  });
});

// DELETE post
exports.deletePost = asyncHandler(async (req, res, next) => {
    const userId = req.header('X-User-Id');
    if (!userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  const post = posts.find(post => post.id == req.params.id);

  if (!post) {
    return next(
        new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }
  if (post.user_id !== userId) {
    return next(new ErrorResponse(`Not authorized to updatethis post`, 401));
  }

  const index = posts.findIndex(post => post.id === req.params.id);
  posts.splice(index, 1);

  res.status(200).json({
    success: true,
    data: {}
  });
});
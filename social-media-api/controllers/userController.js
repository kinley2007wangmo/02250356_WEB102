const { users } = require("../utils/mockData");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc    Get all users
// @route   GET /users
exports.getUsers = asyncHandler((req, res, next) => {
  res.status(200).json({
    success: true,
    data: users
  });
});

// @desc    Get single user
// @route   GET /users/:id
exports.getUser = asyncHandler((req, res, next) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Create new user
// @route   POST /users
exports.createUser = asyncHandler((req, res, next) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser
  });
});

// @desc    Update user
// @route   PUT /users/:id
exports.updateUser = asyncHandler((req, res, next) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  Object.assign(user, req.body);

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Delete user
// @route   DELETE /users/:id
exports.deleteUser = asyncHandler((req, res, next) => {
  const index = users.findIndex(u => u.id == req.params.id);

  if (index === -1) {
    return next(new ErrorResponse("User not found", 404));
  }

  users.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "User deleted"
  });
});
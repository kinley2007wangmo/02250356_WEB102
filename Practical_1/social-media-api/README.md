# Practical 1: Building a RESTful API using Node.js & Express

## Overview

This practical focuses on developing a basic RESTful API for a social media system using Node.js and Express.js. The API supports common social media features such as user management, posts, comments, and basic CRUD operations.

## Aim

* To understand REST API architecture
* To build backend services using Express.js
* To implement CRUD operations for different resources
* To organize backend code using proper folder structure
* To handle requests, responses, and errors efficiently

## Technologies Used

* Node.js
* Express.js
* Nodemon
* dotenv
* Morgan (logging middleware)
* CORS (cross-origin support)
* Helmet (security middleware)

## Project Structure

The project is divided into modular components for better maintainability:
- controllers/ → Contains business logic for routes
- routes/ → Defines API endpoints
- middleware/ → Custom middleware functions (auth, logging, etc.)
- utils/ → Helper functions and sample/mock data
- server.js → Main server entry file

## Setup & Installation

1. Create project folder
```
mkdir social-media-api
cd social-media-api
```
2. Initialize Node project
```
npm init -y
```
3. Install dependencies
```
npm install express morgan cors helmet dotenv
```
4. Install development tool
```
npm install nodemon --save-dev
```
5. Create environment file
Create a file named .env and add:
```
PORT=3000
```
6. Run the server
```
npm run dev
```
## API Endpoints
* Users
    - GET `/api/users` → fetch all users
    - GET `/api/users/:id` → fetch user by ID
    - POST `/api/users` → create new user
    - PUT `/api/users/:id` → update user
    - DELETE `/api/users/:id` → remove user
* Posts
    - GET `/api/posts` → fetch all posts
    - GET `/api/posts/:id` → fetch post by ID
    - POST `/api/posts` → create post
    - PUT /`api/posts/:id` → update post
    - DELETE /`api/posts/:id `→ delete post

* Additional Features
    - Comments, likes, and followers follow similar REST patterns.

## Testing Methods
The API was tested using:
* Web browser (for GET requests)
* Postman (for POST, PUT, DELETE operations)
 
## Conclusion
Through this practical, I gained hands-on experience in building backend APIs using Express.js. It improved my understanding of server-side logic, routing, and structured backend development.
# TikTok REST API – Practical Work

## Overview
This practical work focuses on designing and implementing a RESTful API for a TikTok-style backend application using Node.js and Express.js. The project demonstrates CRUD operations, route handling, controllers, middleware setup, and API testing using tools like Postman or curl.

## Features

- RESTful API architecture
- Express.js backend setup
- CRUD operations for:
    - Videos
    - Users
    - Comments
- Modular project structure
- Route handling with Express Router
- Environment variable configuration using dotenv
- API testing with Postman/cURL
- In-memory data storage implementation

## Technologies Used
- Node.js
- xpress.js
- CORS
- Morgan
- Body-Parser
- Dotenv
- Nodemon

---

## Installation & Setup
1. Initialize your project
Create a new directory for your project and initialize it:
```
mkdir -p server
cd server
npm init -y
```

2. Install Dependencies
```
npm install express cors morgan body-parser dotenv
```

3. Install Development Dependency
```
npm install --save-dev nodemon
```

4. Configure Environment Variables
Create a .env file:
```
PORT=3000
```

5. Start the Server
```
npm run dev
```
Server runs at:
```
http://localhost:3000
```
## API Endpoints

### Video Routes

- `GET /api/videos` → Get all videos
- `GET /api/videos/:id` → Get video by ID
- `POST /api/videos` → Create a new video
- `DELETE /api/videos/:id` → Delete a video
- `GET /api/videos/:id/comments` → Get video comments
- `GET /api/videos/:id/likes` → Get video likes

---

### User Routes

- `GET /api/users` → Get all users
- `GET /api/users/:id` → Get user by ID
- `POST /api/users` → Create a new user
- `DELETE /api/users/:id` → Delete a user
- `GET /api/users/:id/videos` → Get user videos
- `GET /api/users/:id/followers` → Get followers

---

### Comment Routes

- `GET /api/comments` → Get all comments
- `GET /api/comments/:id` → Get comment by ID
- `POST /api/comments` → Create a comment
- `DELETE /api/comments/:id` → Delete a comment

## Testing the API
Example requests:

### Get All Users
```
curl -X GET http://localhost:3000/api/users
```
### Get All Videos
```
curl -X GET http://localhost:3000/api/videos
```
### Get User by ID
```
curl -X GET http://localhost:3000/api/users/1
```
### Get Video Comments
```
curl -X GET http://localhost:3000/api/videos/1/comments
```

## Learning Outcomes
By completing this practical work, the following concepts were learned:
- REST API design principles
- Express.js application setup
- Route and controller separation
- CRUD operation handling
- API testing techniques
- Backend project structuring
- Environment configuration

## Challenges Faced
- Understanding RESTful routing patterns
- Managing modular folder structures
- Debugging route and controller errors
- Testing endpoints correctly using Postman/cURL
- Handling request and response data properly

## Conclusion
This practical work successfully implemented a TikTok-style RESTful API using Express.js. The project provided hands-on experience in backend development, REST architecture, and API testing. It also strengthened understanding of modular coding practices and server-side application structure.

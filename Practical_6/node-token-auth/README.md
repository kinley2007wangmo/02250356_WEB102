# Practical 6: Token-Based Authentication using JWT in Node.js

##  Overview

This practical demonstrates how to implement **token-based authentication** in a Node.js application using **JSON Web Tokens (JWT)**. The project allows users to:

- Register an account
- Login securely
- Generate JWT tokens
- Access protected routes
- Verify authentication using middleware

The project also demonstrates password hashing using **bcryptjs** for improved security.

---

##  Objectives

- Understand token-based authentication
- Learn how JWT works
- Implement secure login and registration
- Protect routes using middleware
- Test APIs using Thunder Client

---

## Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- Thunder Client / Postman

---

## Project Structure

```text
node-token-auth/
├── server.js
├── .env
├── routes/
│   ├── auth.js
│   └── protected.js
└── middleware/
    └── verifyToken.js
```

## Installation

Step 1: Clone or Create Project
```
mkdir node-token-auth
cd node-token-auth
```

Step 2: Initialize Node.js
```
npm init -y
```

Step 3: Install Dependencies
```
npm install express jsonwebtoken bcryptjs dotenv
```
## Environment Variables
Create a `.env` file in the root directory:
```
JWT_SECRET=supersecretkey123
PORT=3000
```

## Running the Server
Start the server using:
```
node server.js
```
Expected output:
```
Server running on http://localhost:3000
```

## API Endpoints
1. Register User
* Endpoint
```
POST /auth/register
```
* Request Body
```
{
  "email": "student@test.com",
  "password": "123456"
}
```
* Success Response
```
{
  "message": "User registered successfully!"
}
```
2. Login User

* Endpoint
```
POST /auth/login
```
* Request Body
```
{
  "email": "student@test.com",
  "password": "123456"
}
```
* Success Response
```
{
  "message": "Login successful!",
  "token": "your_jwt_token"
}
```
3. Access Protected Route

* Endpoint
```
GET /profile
```
* Header
```
Authorization: Bearer your_jwt_token
```
* Success Response
```
{
  "message": "Welcome! You accessed a protected route.",
  "user": {
    "id": 1,
    "email": "student@test.com"
  }
}
```

## How JWT Authentication Works
1. User registers an account
2. Password is hashed using bcrypt
3. User logs in with credentials
4. Server verifies credentials
5. JWT token is generated
6. Client stores the token
7. Token is sent in Authorization header
8. Middleware verifies token before allowing access

## Security Features
* Password hashing using bcryptjs
* JWT token authentication
* Protected routes using middleware
* Token verification
* Environment variables for secret keys

## Key Concepts Learned
* REST API development
* Authentication & Authorization
* JWT Token generation
* Middleware in Express.js
* Password hashing
* HTTP status codes
* API testing

## Common Errors and Fixes
### Error: Cannot find module
Solution
```
npm install
```
### Error: Invalid Token
* Solution
    - Ensure Bearer is included
    - Copy full token correctly
    - Login again to generate new token

### Error: Port already in use
* Solution
    - Stop previous server:
```
Ctrl + C
```
Then restart:
```
node server.js
```
## Conclusion
- This practical successfully implemented JWT-based authentication using Node.js and Express.js. The system securely handled user registration, login, token generation, and protected route access using middleware verification.

- The practical provided hands-on experience with modern authentication mechanisms used in real-world web applications.

## References
1. Node.js Documentation: https://nodejs.org/
2. Express.js Documentation: https://expressjs.com/
3. JWT Official Website: https://jwt.io/
4. bcryptjs GitHub: https://github.com/dcodeIO/bcrypt.js
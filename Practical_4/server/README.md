# TikTok Backend with PostgreSQL and Prisma ORM

## Overview

This project is a TikTok backend server developed using Node.js, Express.js, PostgreSQL, and Prisma ORM. The application supports user registration, login authentication using JWT tokens, password encryption using bcrypt, and database integration with PostgreSQL.

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JWT Authentication
* bcrypt
* Thunder Client

---

## Project Objectives

* Configure PostgreSQL database
* Connect PostgreSQL with Prisma ORM
* Implement authentication system
* Create protected API routes
* Store data persistently in PostgreSQL
* Test APIs using Thunder Client

---

## Installation Guide

### Step 1: Install Dependencies

Run the following commands:

```bash
npm install
npm install @prisma/client
npm install prisma --save-dev
npm install bcrypt jsonwebtoken
npm install nodemon --save-dev
```

---

## Step 2: Configure PostgreSQL Database

Open PostgreSQL terminal:

```
postgres psql
```

Create database:

```
CREATE DATABASE tiktok_db;
```

Create database user:

```
CREATE USER tiktok_user WITH PASSWORD '123456';
GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
```

Exit PostgreSQL:

```
\q
```

![Postgres Terminal](assets/postgres-terminal.png)

---

## Configure Environment Variables

Create `.env` file:

```env
PORT=5000

NODE_ENV=development

DATABASE_URL="postgresql://tiktok_user:password123@localhost:5432/tiktok_db?schema=public"

JWT_SECRET=mysecretkey
JWT_EXPIRE=30d
```

---

## Prisma Setup

Initialize Prisma:

```bash
npx prisma init
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migration:

```bash
npx prisma migrate dev --name init
```

Expected Output:

```bash
✔ Generated Prisma Client
✔ Migration applied successfully
```

---

## Running the Server

Start development server:

```bash
npm run dev
```

Expected terminal output:

```bash
Server running on port http://localhost:5000 in development mode
```

---

## API Testing using Thunder Client

### Register User

### Method:

POST

### Endpoint:

```bash
http://localhost:5000/api/users/register
```

### JSON Body:

```json
{
  "username": "kinley",
  "email": "kinley@gmail.com",
  "password": "123456"
}
```

Expected Result:

* User registered successfully
* Password encrypted using bcrypt

---

## Login User

### Method:

POST

### Endpoint:

```bash
http://localhost:5000/api/users/login
```

### JSON Body:

```json
{
  "email": "kinley@gmail.com",
  "password": "123456"
}
```

Expected Result:

* JWT token generated successfully

---

## Features Implemented

* User registration
* User login
* Password hashing
* JWT authentication
* PostgreSQL database integration
* Prisma ORM database operations
* Protected routes

---

## Common Errors and Fixes

### Prisma Client Error

Run:

```bash
npx prisma generate
```

---

### Database Connection Error

Check:

* PostgreSQL is running
* DATABASE_URL is correct

---

## JWT Authentication Error

Ensure:

* Authorization header contains Bearer token
* JWT_SECRET exists in `.env`

---

## Conclusion

This practical successfully demonstrated how to connect a Node.js TikTok backend application with PostgreSQL using Prisma ORM. Authentication was implemented securely using bcrypt and JWT. The RESTful APIs were tested successfully using Thunder Client.

The project also demonstrated how ORM tools simplify database operations and improve backend development efficiency.

---

## References

1. Prisma Documentation
   https://www.prisma.io/docs

2. PostgreSQL Documentation
   https://www.postgresql.org/docs/

3. Express.js Documentation
   https://expressjs.com/

4. JWT Documentation
   https://jwt.io/

5. bcrypt Documentation
   https://www.npmjs.com/package/bcrypt

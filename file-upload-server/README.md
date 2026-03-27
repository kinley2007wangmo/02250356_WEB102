# Description

 This project implements a server-side file upload system using Node.js and Express. It allows users to upload files (PDF, JPG, PNG), validates them, stores them on the server, and provides access to the uploaded files.

### Objective
 To build a backend application that can:
* Receive file uploads
* Validate file type and size
* Store files securely
* Serve uploaded files
* Handle errors properly

### Technologies Used
    Node.js
    Express.js
    Multer
    CORS
    Morgan
    Dotenv

### Project Structure
    file-upload-server/
    uploads/        # Stores uploaded files
    .env            # Environment variables
    server.js       # Main server file
    package.json
    node_modules/

### Installation & Setup
1. Clone the repository: 
    git clone <https://github.com/kinley2007wangmo/02250356_WEB102.git>
    
    cd file-upload-server
    
2. Install dependencies: 
    npm install
    
3. Create .env file: 
    PORT=8000
    
    FRONTEND_URL=http://localhost:3000
 
4. Run the server:
    node server.js

### Usage
1. Open browser:
    http://localhost:8000

2. Upload a file using the form.

### API Endpoint
 Upload File
* URL: /api/upload
* Method: POST
* Body: form-data
    * Key: file (File)

### Features
* File upload using Multer
* Supports PDF, JPG, PNG
* File size limit: 5MB
* Automatic uploads folder creation
* Error handling for invalid files
* Static file serving

###  Error Handling
* Invalid file type
* File size exceeds limit
* No file uploaded

### Access Uploaded Files

Uploaded files can be accessed via:
    http://localhost:8000/uploads/<filename> (eg; Practical_3)

### Testing
* Tested using browser upload form
* Verified file storage in uploads/
* Checked validation and error handling

### Result

The system successfully uploads, validates, and stores files while handling errors efficiently.
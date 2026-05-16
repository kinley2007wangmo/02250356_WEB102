const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(require('./middleware/formatResponse'));

// Routes
app.use(express.static('public'));
app.get('/api-docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public',SiDocsdotrs.html));
});
app.use('/users',require('./routes/users'));
app.use('/posts',require('./routes/posts'));

app.get('/', (req,res) => {
  res.json({ message: 'Welcome to Social Media API' });
});

app.use(require('./middleware/errorHandler'));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running in development mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);

  process.exit(1);
})

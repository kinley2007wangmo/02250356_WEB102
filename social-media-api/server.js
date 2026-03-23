const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// Routes
app.use("/users", require("./routes/users"));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const errorHandler = require("./middleware/errorHandler");

// after routes
app.use(errorHandler);